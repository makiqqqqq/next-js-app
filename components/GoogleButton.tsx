'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  const login = () => signIn('google', {
    callbackUrl
  });

  return (
    <button onClick={login}>
      Sign in with Google
    </button>
  );
};

export default GoogleButton;