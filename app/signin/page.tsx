import GoogleButton from '@/components/GoogleButton';
import SignInForm from '@/components/SingInForm';

const Signin = () => {
  return (
    <div>
      <h1>SignIn</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  );
};

export default Signin;