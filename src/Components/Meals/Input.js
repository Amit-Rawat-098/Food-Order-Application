import React from 'react';
import classes from './Input.module.css';

const Input=(props)=>{
const amoutHandler=(event)=>{
    props.onAmount(event.target.value);
}
    return <div className={classes.input}>
        <label htmlFor={props.item.id}>{props.label}</label>
        <input {...props.item} defaultValue='1' onChange={amoutHandler}></input>
    </div>
};

export default Input;