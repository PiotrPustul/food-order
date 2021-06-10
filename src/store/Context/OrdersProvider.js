import { useEffect, useState } from 'react';

import OrdersContext from './orders-context';

const OrdersProvider = ({ children }) => {
   const [orders, setOrders] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [httpError, setHttpError] = useState();

   useEffect(() => {
      const fetchOrders = async () => {
         const response = await fetch(`${process.env.REACT_APP_API_KEY_ORDER}`);

         if (!response.ok) {
            throw new Error('Something went wrong!');
         }

         const responseData = await response.json();

         const loadedOrders = [];
         for (const key in responseData) {
            loadedOrders.push({
               id: key,
               orderedItems: responseData[key].orderedItems,
               totalAmount: responseData[key].totalAmount,
               user: responseData[key].user
            });
         }

         setOrders(loadedOrders);
         setIsLoading(false);
      };

      fetchOrders().catch(err => {
         setIsLoading(false);
         setHttpError(err.message);
      });
   }, [orders]);

   const ordersContext = {
      orders,
      isLoading,
      httpError
   };

   return (
      <OrdersContext.Provider value={ordersContext}>
         {children}
      </OrdersContext.Provider>
   );
};

export default OrdersProvider;