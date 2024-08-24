"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebase";
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpFormSchema } from "@/schema";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
type FormItem = {
  name: "email" | "username" | "password" | "confirmPassword";
  placeholder: string;
  label: string;
};

const FORM_ITEMS: FormItem[] = [
  {
    name: "email",
    placeholder: "e.g., john.doe@example.com",
    label: "Email",
  },
  {
    name: "username",
    placeholder: "Choose a unique username",
    label: "Username",
  },
  {
    name: "password",
    placeholder:
      "At least 6 characters, with uppercase, lowercase, numbers, and symbols",
    label: "Password",
  },
  {
    name: "confirmPassword",
    placeholder: "Re-enter your password",
    label: "Confirm Password",
  },
];

const SignUpForm: React.FC<{ onGoBack: () => void }> = ({ onGoBack }) => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  const router = useRouter();
  const handleSignUp = async (
    email: string,
    password: string,
    username: string
  ) => {
    try {
      setLoading(true)
      const usersRef = collection(db, "users");
      const checkEmail = query(usersRef, where("email", "==", email));
      const checkUsername = query(usersRef, where("username", "==", username));
      const checkEmailSnapshot = await getDocs(checkEmail);
      const checkUsernameSnapshot = await getDocs(checkUsername);
      if (checkEmailSnapshot.size > 0) {
        throw new Error("Email already exists");
      }
      if (checkUsernameSnapshot.size > 0) {
        throw new Error("Username already exists");
      }
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: email,
        username: username,
        userId: userCredential.user.uid,
        bio: "No bio",
      });
      toast({
        title: "Sign up Success",
        description: "You have successfully signed up",
      });
      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Sign up Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Sign up Error",
          description: "Something went wrong",
          variant: "destructive",
        });
      }
    }finally{
      setLoading(false)
    }
  };
  const onSubmit = async (values: z.infer<typeof signUpFormSchema>) => {
    await handleSignUp(values.email, values.password, values.username);
  };
  return (
    <Form {...form}>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        {FORM_ITEMS.map((formItem, idx) => (
          <FormField
            key={idx}
            control={form.control}
            name={formItem.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formItem.label}</FormLabel>
                <FormControl>
                  <Input placeholder={formItem.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <div className="buttons flex items-center gap-2">
          <Button
            disabled={loading}
            onClick={onGoBack}
            type="button"
            className="flex-grow"
            variant={"secondary"}
          >
            Go Back
          </Button>
          <Button disabled={loading} className="flex-grow" type="submit">
            Submit
          </Button>
        </div>
      </motion.form>
    </Form>
  );
};

export default SignUpForm;
