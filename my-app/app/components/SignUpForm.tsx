
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/assets/dark-logo.png';
import './signup.css';
import { signUp } from '../actions/users/signUp';
import { signIn, useSession } from "next-auth/react";

const SignUpForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('Signing up...');
    try {
      const responseMessage = await signUp(email, password, name);
      setMessage(responseMessage);
      if (responseMessage === 'Success') {
        await signIn(email, password);
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setMessage('Signup failed');
    }
  };

  return (
    <div className='sign-up-box'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <Image src={logo} alt="logo" id="logo"/>
        <input className="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='signup-button' type="submit">Sign up</button>
        <p id='signin-text'>Already have an account? Sign in <Link href="/auth/signin" className="underline">here</Link>.</p>
      </form>
    </div>
  );
};

export default SignUpForm;
