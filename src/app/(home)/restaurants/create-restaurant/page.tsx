import type { Metadata } from 'next';
import AddRestaurantForm from '@/components/modules/home/restaurants/restaurantForm';

export const metadata: Metadata = {
  title: 'Create Restaurant',
  description:
    'Register your restaurant on Foodie. Set up your menu, delivery zones, and start receiving orders today.',
  openGraph: {
    title: 'Create Restaurant | Foodie',
    description: 'Register your restaurant on Foodie and start receiving orders.',
  },
};
import { userService } from '@/services/user.service';



const CreateRestaurant = async () => {
  const session = await userService.getUserSession();

  if (!session?.user?.id) return null;

  return <AddRestaurantForm ownerId={session.user.id} />;
};

export default CreateRestaurant;
