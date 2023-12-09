"use client";
import React, { useEffect, useState } from "react";
import { signUp } from "../actions/users/signUp";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/app/assets/dark-logo.png";
import "./signin.css";

const SignInForm = () => {
  const router = useRouter();
  const { status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default form submission
    setMessage("Signing in...");

    try {
      const signInResponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!signInResponse || signInResponse.ok !== true) {
        setMessage("Invalid credentials");
        console.log("not successful");
      } else {
        console.log("successful");
        router.push("/dashboard");
      }
    } catch (err) {
      console.error(err);
      setMessage("Sign in failed");
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <div className="sign-in-box">
      <form className="signin-form">
        <Image src={logo} alt="logo" id="logo" />
        <input
          className="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signin-button" onClick={handleSubmit}>
          Sign in
        </button>
        <p id="signup-text">
          Don&apos;t have an account? Sign up{" "}
          <Link href="/auth/signup">
            <u>here</u>
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
