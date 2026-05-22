import type { Metadata } from 'next';
import SignUp from "@/components/pages/auth/signup";

export const metadata: Metadata = {
  title: 'Sign Up',
  description:
    'Create a new Foodie account to start ordering food from your favourite restaurants and track deliveries.',
  openGraph: {
    title: 'Sign Up | Foodie',
    description: 'Create a new Foodie account today.',
  },
};

const RegisterPage = () => {
  return <SignUp />;
};

export default RegisterPage;
