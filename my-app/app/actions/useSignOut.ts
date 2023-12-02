// useSignOut.ts
import { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';

const useSignOut = () => {
  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false });
      // Note: Do not use router.push('/') here, as it might cause issues
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return handleSignOut;
};

export default useSignOut;
