import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurants',
  description:
    'Discover top-rated restaurants on Foodie. Browse menus, read reviews, and get your favourite food delivered fast.',
  openGraph: {
    title: 'Restaurants | Foodie',
    description: 'Discover top-rated restaurants near you.',
  },
};

export default function RestaurantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
