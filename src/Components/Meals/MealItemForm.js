import React,{ useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from './Input';


const MealItemForm =(props)=>{

const [amount , setAmount]=useState('1');

const submitHandler=(event)=>{
        event.preventDefault();
        props.onAmountChange(amount);
        

    };
const setamount =(element)=>{
setAmount(element);
}
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input label='Amount' 
        item={{
            id:props.id,
            type: 'number',
            min:'1',
            max: '5',
            step: '1'
        }} onAmount={setamount}></Input>
        <button>+ Add</button>
    </form>
};

export default MealItemForm;