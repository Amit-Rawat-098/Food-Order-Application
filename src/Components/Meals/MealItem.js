import React,{useContext} from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../Store/cart-context';
const MealItem=(props)=>{
    const ctx= useContext(CartContext);
    const price= `₹ ${props.price}`;
 
    const changeAmount=element=>{
       
     ctx.addItem({
        id: props.id,
        name: props.name,
        amount: element,
        price: props.price

     })

    }

    return <li className={classes.meal}>
        <div >
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.des}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div>
         <MealItemForm id={props.id} onAmountChange={changeAmount}/>
        </div>
    </li>
};

export default MealItem;