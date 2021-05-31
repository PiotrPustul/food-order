import { useState } from 'react';

import CartProvider from './store/Context/CartProvider';
import MealsProvider from './store/Context/MealsProvider';
import OrdersProvider from './store/Context/OrdersProvider';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Orders from './components/Orders/Orders';
import Cart from './components/Cart/Cart';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <MealsProvider>
        <OrdersProvider>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
          <main>
            <Meals />
            <Orders />
          </main>
        </OrdersProvider>
      </MealsProvider>
    </CartProvider>
  );
};

export default App;
