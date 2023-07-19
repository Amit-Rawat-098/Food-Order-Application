import React from "react";
import classes from './Header.module.css';
import mealImage from '../../Photo/meals.jpg';
import CartButton from "../Cart/Button";

const Header=(props)=>{
    return <>
    <header className={classes.header}>
        <h1>Destiny</h1>
        <CartButton onEnableCart={props.onEnable} />
    </header>
  
    <div className={classes['main-image']}>
        <img src={mealImage} alt="An picture of Delicious food!"></img>
    </div>
    </>
};

export default Header;