import { EmptyOrdersState } from '@/components/modules/home/orders/emptyOrder';
import MainOrder from '@/components/modules/home/orders/mainOrder';
import orderService from '@/services/order.service';
import { userService } from '@/services/user.service';
import { Order } from '@/types/order';

// Status configuration using CSS variables


const OrderPage = async () => {
  const session = await userService.getUserSession();

  if (!session) return null;

  const response = await orderService.getAllOrderByUserId(session.user.id);
  
  // Debug dump for agent
  require('fs').writeFileSync('C:\\Users\\MD. Abdur Rahman\\.gemini\\antigravity-ide\\brain\\22f69265-c7f7-4eca-ba02-0b47f2ae3c1a\\scratch\\debug_orders.json', JSON.stringify(response, null, 2));

  // Handle different potential backend payload structures
  let orders: Order[] = [];
  if (Array.isArray(response?.data)) {
    orders = response.data;
  } else if (Array.isArray(response?.data?.data)) {
    orders = response.data.data;
  } else if (Array.isArray(response)) {
    orders = response;
  }

  if (!orders || orders.length === 0) {
    return <EmptyOrdersState />;
  }

  return <MainOrder session={session} orders={orders} />;
};

export default OrderPage;
