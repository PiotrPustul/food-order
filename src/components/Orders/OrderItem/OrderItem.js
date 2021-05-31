import classes from '../OrderItem/OrderItem.module.css';

const OrderItem = (props) => {
   const userClass = `${classes.list} ${classes['user-list']}`;
   const orderClass = `${classes.list} ${classes['order-list']}`;
   const totalAmount = `£${props.total.toFixed(2)}`

   return (
      <div className={classes.order}>
         <h3>Order Number: {props.orderNr}</h3>
         <div>
            <ul className={userClass}>
               <li className={classes.user}>
                  <span>Name:</span>
                  <span>{props.user.name}</span>
               </li>
               <li className={classes.user}>
                  <span>Street:</span>
                  <span>{props.user.street}</span>
               </li>
               <li className={classes.user}>
                  <span>Post code:</span>
                  <span>{props.user.postCode}</span>
               </li>
               <li className={classes.user}>
                  <span>City:</span>
                  <span>{props.user.city}</span>
               </li>
            </ul>
            <ul className={orderClass}>
               {props.items.map(item => {
                  const orderAmount = (item.price * item.amount).toFixed(2);
                  return <li className={classes.user}>
                     <span>{item.amount}x</span>
                     <span>{item.name}</span>
                     <span>£{orderAmount}</span>
                  </li>
               })}
               <li>
                  <span>Total:</span>
                  <span className={classes.price}>{totalAmount}</span>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default OrderItem;