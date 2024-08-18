"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore"; 

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

const SignUpForm = () => {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  const handleSignUp = async (
    email: string,
    password: string,
    username: string
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await addDoc(collection(db, "users"), {
        email: email,
        username: username,
        userId: userCredential.user.uid,
      })
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async (values: z.infer<typeof signUpFormSchema>) => {
    await handleSignUp(values.email, values.password, values.username);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
