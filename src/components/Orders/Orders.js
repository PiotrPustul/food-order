import { useContext } from 'react';

import Card from '../UI/Card';
import OrderItem from './OrderItem/OrderItem';
import classes from './Orders.module.css';
import OrdersContext from '../../store/Context/orders-context';

const Orders = () => {
   const ordersCtx = useContext(OrdersContext);

   if (ordersCtx.isLoading) {
      return (
         <section className={classes.OrdersLoading}>
            <p>Loading...</p>
         </section>
      );
   };

   if (ordersCtx.httpError) {
      return (
         <section className={classes.MealsError}>
            <p>{ordersCtx.httpError}</p>
         </section>
      );
   };

   const ordersList = ordersCtx.orders.map(order => (
      <OrderItem
         key={order.id}
         orderNr={order.id}
         price={order.price}
         total={order.totalAmount}
         items={order.orderedItems}
         user={order.user}
      />
   ));

   return (
      <section className={classes.orders}>
         <Card>
            <h1>Orders</h1>
            {ordersList.length < 1 ? <h3>There are currently no orders</h3> : ordersList}
         </Card>
      </section>
   );
};

export default Orders;