import { useEffect, useState } from 'react';

import MealsContext from './meals-context';

const MealsProvider = ({ children }) => {
   const [meals, setMeals] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [httpError, setHttpError] = useState();

   useEffect(() => {
      const fetchMeals = async () => {
         const response = await fetch('https://food-order-70879-default-rtdb.europe-west1.firebasedatabase.app/meals.json');

         if (!response.ok) {
            throw new Error('Something went wrong!');
         }

         const responseData = await response.json();

         const loadedMeals = [];
         for (const key in responseData) {
            loadedMeals.push({
               id: key,
               name: responseData[key].name,
               description: responseData[key].description,
               price: responseData[key].price
            });
         }

         setMeals(loadedMeals);
         setIsLoading(false);
      }

      fetchMeals().catch(err => {
         setIsLoading(false);
         setHttpError(err.message);
      });

   }, []);

   const mealsContext = {
      meals,
      isLoading,
      httpError
   };

   return (
      <MealsContext.Provider value={mealsContext}>
         {children}
      </MealsContext.Provider>
   );
};


export default MealsProvider;