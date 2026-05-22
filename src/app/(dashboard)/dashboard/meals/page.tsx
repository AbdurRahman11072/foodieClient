// app/(dashboard)/dashboard/meals/page.tsx
import { MealsTable } from '@/components/modules/dashboard/meals/meals-table';
import mealService from '@/services/meals.service';
import { userService } from '@/services/user.service';
import { SessionData } from '@/types/session';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manage Meals',
  description: 'Add, edit, and manage your restaurant menu items.',
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const MealsPage = async ({ searchParams }: PageProps) => {
  const session: any = await userService.getUserSession();
  const params = await searchParams;

  if (!session) return null;

  const page = params.page ? parseInt(params.page as string) : 1;
  const limit = 10;

  const result = await mealService.getAllMealByRestaurants(
    session?.user?.restaurantId,
    session.user.role,
    page,
    limit
  );

  return (
    <div className="space-y-4">
      <MealsTable
        meals={result.data.data}
        restaurantId={session?.user?.restaurantId as string}
        totalItems={result.data.total}
        currentPage={page}
        limit={limit}
      />
    </div>
  );
};

export default MealsPage;
