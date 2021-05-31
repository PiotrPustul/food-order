import { useReducer } from 'react';

import CartContext from './cart-context';
import cartReducer, { defaultCartState } from '../Reducers/cart-reducer';
import { ADD, REMOVE, CLEAR } from '../Actions/cart-actions';

const CartProvider = ({ children }) => {
   const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

   const addItemToCartHandler = (item) => {
      cartDispatch({ type: ADD, item: item });
   };

   const removeItemFormCarthandler = (id) => {
      cartDispatch({ type: REMOVE, id: id });
   };

   const clearCarthandler = () => {
      cartDispatch({ type: CLEAR });
   };

   const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFormCarthandler,
      clearCart: clearCarthandler,
   };

   return (
      <CartContext.Provider value={cartContext}>
         {children}
      </CartContext.Provider>
   );
};


export default CartProvider;