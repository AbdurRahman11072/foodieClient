import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Meal',
  description: 'Edit a meal item in your restaurant menu.',
};

const updateMealPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <div>{id}</div>;
};

export default updateMealPage;
