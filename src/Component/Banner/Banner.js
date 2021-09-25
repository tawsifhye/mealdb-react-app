import React from 'react';
import bannerIcon from '../../meal-icon.png'
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner'>
            <img src={bannerIcon} alt="" />
            <div>
            <h1>Welcome to MealDb</h1>
            <p>MealDB Paris is a French cooking school in Paris offering a variety of cooking classes in English.  We would be pleased to have you join us! We offer numerous French cuisine classes, including Croissant Classes, Macaron Classes, Traditional French Pastry Classes, Technical Skills Classes, and a French Cheese Workshop in addition to Food Tours in Paris and Versailles!</p>
            </div>
            <img src={bannerIcon} alt="" />
        </div>
    );
};

export default Banner;