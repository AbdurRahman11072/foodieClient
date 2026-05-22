import type { Metadata } from 'next';
import AppPromo from '@/components/modules/home/appPromo';
import HomeCategories from '@/components/modules/home/category';
import Cta from '@/components/modules/home/cta';
import FeaturedMeals from '@/components/modules/home/featuredMeals';
import FooterSection from '@/components/modules/home/footer';
import Hero from '@/components/modules/home/hero';
import HowItWorks from '@/components/modules/home/howItWorks';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to Foodie — discover top-rated restaurants near you, explore featured meals, and get food delivered to your door in minutes.',
  openGraph: {
    title: 'Foodie — Order Food Online',
    description:
      'Discover top-rated restaurants near you and get food delivered in minutes.',
  },
};



export default function Home() {
  return (
    <div className="container mx-auto space-y-20 my-8">
      <Hero />
      <HomeCategories />
      <FeaturedMeals />
      <HowItWorks />
      <Cta />
      <AppPromo />
      <Separator />
      <FooterSection />
    </div>
  );
}
