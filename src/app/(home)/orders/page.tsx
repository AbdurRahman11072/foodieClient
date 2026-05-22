import type { Metadata } from 'next';
import { EmptyOrdersState } from '@/components/modules/home/orders/emptyOrder';
import MainOrder from '@/components/modules/home/orders/mainOrder';
import orderService from '@/services/order.service';
import { userService } from '@/services/user.service';
import { Order } from '@/types/order';

// Status configuration using CSS variables

export const metadata: Metadata = {
  title: 'My Orders',
  description:
    'View and track all your Foodie orders. Check order status, delivery updates, and order history.',
  openGraph: {
    title: 'My Orders | Foodie',
    description: 'Track and manage all your Foodie food orders.',
  },
};

const OrderPage = async () => {
  const session = await userService.getUserSession();

  if (!session) return null;

  const response = await orderService.getAllOrderByUserId(session.user.id);


  // Handle different potential backend payload structures
  let orders: Order[] = response?.data?.data || []


  if (!orders || orders.length === 0) {
    return <EmptyOrdersState />;
  }

  return <MainOrder session={session} orders={orders} />;
};

export default OrderPage;
