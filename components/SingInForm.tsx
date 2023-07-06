'use client';

import { useRouter } from 'next/navigation';
import { FormEventHandler } from 'react';
import { signIn } from 'next-auth/react';

const SignInForm = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const result = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    });

    if (result && !result.error) {
      router.push('/profile');
    } else {
      alert(result?.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='email' name='email' required />
      <input type='password' name='password' required />
      <button type='submit'>Sign in</button>
    </form>
  );
};
export default SignInForm;