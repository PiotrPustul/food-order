import { useContext } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import MealsContext from '../../store/Context/meals-context';

const AvailableMeals = () => {
   const mealsCtx = useContext(MealsContext);

   if (mealsCtx.isLoading) {
      return (
         <section className={classes.MealsLoading}>
            <p>Loading...</p>
         </section>
      );
   };

   if (mealsCtx.httpError) {
      return (
         <section className={classes.MealsError}>
            <p>{mealsCtx.httpError}</p>
         </section>
      );
   };

   const mealsList = mealsCtx.meals.map(meal => (
      <MealItem
         key={meal.id}
         id={meal.id}
         name={meal.name}
         description={meal.description}
         price={meal.price}
      />
   ));

   return (
      <section className={classes.meals}>
         <Card>
            <ul>{mealsList}</ul>
         </Card>
      </section>
   );
};

export default AvailableMeals;