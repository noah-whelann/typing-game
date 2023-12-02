// SignOut.tsx
'use client';
import React, { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignOut = () => {
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        const handleSignOut = async () => {
            try {
                await signOut({ redirect: false });
                router.push('/'); // Redirect to the home page or any other page after sign out
            } catch (error) {
                console.error('Error signing out:', error);
                // Handle any error, might want to redirect the user even if signOut fails
                router.push('/');
            }
        };

        if (session) {
            handleSignOut();
        } else {
            // If there's no active session, might want to redirect to the home page or login page
            router.push('/');
        }
    }, [router, session]);

    return (
        <div>
            Signing out...
        </div>
    );
};

export default SignOut;
