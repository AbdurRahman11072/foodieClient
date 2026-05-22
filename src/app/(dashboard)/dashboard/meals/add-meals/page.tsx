import AddMealForm from '@/components/modules/dashboard/meals/add-meal';
import { userService } from '@/services/user.service';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Add Meal',
  description: 'Add a new meal item to your restaurant menu.',
};

const AddMealPage = async () => {
  const userSession = await userService.getUserSession();

  if (!userSession) return null;

  return <AddMealForm restaurantId={(userSession.user as any).restaurantId} />;
};

export default AddMealPage;
