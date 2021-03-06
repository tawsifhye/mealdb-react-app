import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import './Meal.css'

const Meal = (props) => {
    const {strCategory, strCategoryThumb} = props.meal;
    const btnIcon = <FontAwesomeIcon icon={faDownload} />
    return (
        <div className="meal">
            <img src={strCategoryThumb} alt="" />
            <h4>{strCategory}</h4>
            <button>{btnIcon}Add Item</button>
        </div>
    );
};

export default Meal;