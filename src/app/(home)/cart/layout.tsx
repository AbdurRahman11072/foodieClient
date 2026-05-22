import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Review your Foodie shopping cart before checkout.',
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
