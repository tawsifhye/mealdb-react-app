import React from 'react';
import './Meal.css'
import './Meal.css'

const Meal = (props) => {
    console.log(props.meal);
    const {strCategory, strCategoryThumb} = props.meal;
    // console.log(strCategory);
    return (
        <div className="meal">
            <img src={strCategoryThumb} alt="" />
            <h4>{strCategory}</h4>
        </div>
    );
};

export default Meal;