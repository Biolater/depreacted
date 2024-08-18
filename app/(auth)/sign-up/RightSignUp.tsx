"use client";

import { Button } from "@/components/ui/button";
import { auth, googleProvider } from "@/firebase";
import { GoogleIcon } from "@/icons";
import { signInWithPopup } from "firebase/auth";
import Link from "next/link";

const RightSignUp = () => {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <div className="max-w-md w-full mx-auto lg:ml-6 xl:ms-[140px] px-4  flex justify-center flex-col min-h-svh">
      <h1 className="text-2xl font-semibold text-foreground mb-8">
        Sign up to Health Bar
      </h1>
      <Button
        onClick={handleGoogleSignIn}
        variant={"outline"}
        className="flex items-center gap-2 w-full h-10"
      >
        <GoogleIcon />
        Sign up with Google
      </Button>
      <div className="my-5 text-sm text-muted-foreground h-[1px] w-full  bg-border signup-line relative">
        <div className="divider">or</div>
      </div>
      <Button className="h-10">Continue with email</Button>
      <p className="text-sm mt-4 text-muted-foreground text-center">
        Already have an account?
        <Link href="/sign-in">
          <Button className="p-0" variant={"link"}>
            Sign In
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default RightSignUp;
