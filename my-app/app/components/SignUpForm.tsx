"use client";

import React, { useState } from "react";
import { signUp } from "../actions/users/signUp";
import Image from "next/image";
import logo from "@/app/assets/dark-logo.png"
import './signup.css'
import Link from "next/link";

const SignUpForm = () => {
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");
  const [name, setName] = useState("Name");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setMessage("Signing up...");
    const message = await signUp(email, password, name);
    setMessage(message);
  };

  return (
    <div className='sign-up-box'>
        <form className='h-3/5'>
            <Image src={logo} alt="logo" id="logo"/>
            <input className="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input className="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className='signup-button' onClick={handleSubmit}>Sign up</button>
            <p id='signup-text'>Already have an account? Sign in <Link href="/auth/signin"><u>here</u></Link>.</p>
        </form>
    </div>
  );
};

export default SignUpForm;
