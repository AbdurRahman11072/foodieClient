import type { Metadata } from 'next';
import { RestaurantDetails } from '@/components/modules/home/restaurants/DetailsPage/restaurantDetails';
import restaurantService from '@/services/restaurant.service';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const res = await restaurantService.getRestaurantById(id);
  const name = res?.data?.name ?? 'Restaurant Details';
  return {
    title: name,
    description:
      res?.data?.description ??
      `Explore ${name} on Foodie — browse the menu and order your favourite meals.`,
    openGraph: {
      title: `${name} | Foodie`,
      description: `Order from ${name} on Foodie.`,
    },
  };
}

const RestaurantDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const restaurant = await restaurantService.getRestaurantById(id);

  console.log(restaurant.data);

  return <RestaurantDetails restaurant={restaurant.data} />;
};

export default RestaurantDetailsPage;
