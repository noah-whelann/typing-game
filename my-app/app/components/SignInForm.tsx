'use client';
import React, { useEffect, useState } from 'react';
import { signUp } from '../actions/users/signUp';
import Link from "next/link";
import { signIn, useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import Image from "next/image";
import logo from "@/app/assets/dark-logo.png"
import './signin.css'

const SignInForm = () => {
    const router = useRouter();

    const { status } = useSession();

    const [email, setEmail] = useState('email');
    const [password, setPassword] = useState('password');

    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        setMessage('Signing in...');
        
        try {
            const signInResponse = await signIn('credentials', {
                email,
                password,
                redirect: false,
            })

            if(!signInResponse || signInResponse.ok !== true) {
                setMessage("Invalid credentials");
            } else {
                router.refresh();
            }

        } catch(err) {
            console.log(err);
        }

        setMessage(message);
    };

    useEffect(() => {
        if (status === 'authenticated') {
            router.refresh();
            router.push('/dashboard');
        }
    }, [router, status]);

    return (
        <div className='sign-in-box'>
            <form className='form'>
                <Image src={logo} alt="logo" id="logo"/>
                <input className="email" type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="password" type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='signin-button' onClick={handleSubmit}>Sign in</button>
                <p id='signup-text'>Don't have an account? Sign up <Link href="/auth/signup"><u>here</u></Link>.
                </p>
            </form>
        </div>
    );
};

export default SignInForm;