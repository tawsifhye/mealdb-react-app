import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => setMeals(data.categories))
    },[])

    // console.log(meals);
    return (
        <div>
            {
                meals.map( meal => <Meal meal={meal}></Meal>)
            }
        </div>
    );
};

export default Meals;