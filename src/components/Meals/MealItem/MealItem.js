import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/Context/cart-context';

const MealItem = (props) => {
   const cartCtx = useContext(CartContext);

   const mealPrice = `£${props.price.toFixed(2)}`;

   const addToCartHandler = (amount) => {
      cartCtx.addItem({
         id: props.id,
         name: props.name,
         amount: amount,
         price: props.price,
      });
   };

   return (
      <li className={classes.meal}>
         <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{mealPrice}</div>
         </div>
         <div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
         </div>
      </li>
   );
};

export default MealItem;