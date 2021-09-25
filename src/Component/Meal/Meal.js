import React from 'react';
import './Meal.css'

const Meal = (props) => {
    // console.log(props);
    const {strCategory} = props.meal;
    // console.log(strCategory);
    return (
        <div className="meal">
            <h4>{strCategory}</h4>
        </div>
    );
};

export default Meal;