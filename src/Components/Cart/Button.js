import React,{useContext, useEffect, useState} from "react";
import CartIcon from "./CartIcon";
import classes from './Button.module.css';
import CartContext from "../../Store/cart-context";
const CartButton=(props)=>{

  const ctx=useContext(CartContext);
 
  const [addBump, setBump]= useState(false);
  var numberOfItem=0;
  ctx.item.forEach(element => {
    numberOfItem+=element.quantity;
    
  });
  // const numberOfItem= ctx.item.reduce((current, item)=>{
  //   return current+item.totalAmount
  // }, 0);
    const enableButton=()=>{
      props.onEnableCart();
    }

    const Class= `${classes.button} ${addBump ? classes.bump : ''}`;

    useEffect(()=>{
    if(numberOfItem===0){
      return ;
    }
    setBump(true);
    const timer= setTimeout(()=>{setBump(false)}, 300);


    return ()=>{
clearTimeout(timer);
    }
    },[numberOfItem]);
    return <button className={Class} onClick={enableButton} >
        <span className={classes.icon}><CartIcon></CartIcon></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItem}</span>
    </button>
}

export default CartButton;