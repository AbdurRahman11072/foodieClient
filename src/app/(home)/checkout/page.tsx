import type { Metadata } from 'next';
import CheckoutPage from '@/components/modules/home/checkout/checkout';

export const metadata: Metadata = {
  title: 'Checkout',
  description:
    'Complete your Foodie order. Review your items, enter your delivery address, and pay securely.',
  openGraph: {
    title: 'Checkout | Foodie',
    description: 'Complete your Foodie food order securely.',
  },
};
import { userService } from '@/services/user.service';



const checkOutPage = async () => {
  const session = await userService.getUserSession();

  return <CheckoutPage session={session as any} />;
};

export default checkOutPage;
