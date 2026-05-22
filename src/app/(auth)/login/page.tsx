import type { Metadata } from 'next';
import LoginPage from "@/components/pages/auth/login";

export const metadata: Metadata = {
  title: 'Login',
  description:
    'Sign in to your Foodie account to order food, track deliveries, and manage your profile.',
  openGraph: {
    title: 'Login | Foodie',
    description: 'Sign in to your Foodie account.',
  },
};

const Login = () => {
  return <LoginPage />;
};

export default Login;
