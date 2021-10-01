import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [matchedMeals, setMatchedMeals] = useState([]);
    const handleSearch = (event) =>{
        const searchValue = event.target.value.toLowerCase();
        const matchedMeal = meals.filter(meal => meal.strCategory.toLowerCase().includes(searchValue))
        setMatchedMeals(matchedMeal);
    }
    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => {
            setMeals(data.categories)
            setMatchedMeals(data.categories)
        })
    },[])

    // console.log(meals);
    return (
        <div>
            <div style={{textAlign:'center', padding: '10px '}}>
                <input onChange={handleSearch} type="text" placeholder='search meal' />
            </div>
            <h2 style={{textAlign: 'center', color: 'white', marginTop: 0}}>Meals by Category</h2>
            <div className='meals'>
                {
                matchedMeals.map( meal => <Meal key={meal.idCategory} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;