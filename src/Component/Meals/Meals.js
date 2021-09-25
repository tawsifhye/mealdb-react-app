import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

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
            <h2 style={{textAlign: 'center', color: 'white', marginTop: 0}}>Meals by Category</h2>
            <div className='meals'>
                {
                meals.map( meal => <Meal meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;