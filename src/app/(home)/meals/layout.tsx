import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meals',
  description:
    'Browse our extensive menu of delicious meals. Filter by cuisine, price, and find exactly what you are craving.',
  openGraph: {
    title: 'Browse Meals | Foodie',
    description: 'Find exactly what you are craving on Foodie.',
  },
};

export default function MealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
