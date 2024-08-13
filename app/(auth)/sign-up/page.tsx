import { Metadata } from "next";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import SignUpForm from "./signupForm";
export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUp = () => {
  const handleSignUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }
  };
  return <SignUpForm />;
};

export default SignUp;
