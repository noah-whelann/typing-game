"use client";

import React, { useState } from "react";
import { signUp } from "../actions/users/signUp";

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
    <div className="flex flex-col gap-4 bg-gray-400 p-4">
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Sign up</button>
      <p>{message}</p>
    </div>
  );
};

export default SignUpForm;
