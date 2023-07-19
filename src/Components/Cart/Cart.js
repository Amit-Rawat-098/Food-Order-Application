import React, {useContext, useState, useEffect} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Model';
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';
import OrderForm from './orderForm';

// {/* <li key={Math.random()}>{items.name}</li> */}
const Cart=props=>{
const [isForm, setForm]=useState(false);
const [hasItem,sethasItem]=useState(false);
    const ctx= useContext(CartContext);
   const tAmount= `₹${ctx.totalAmount.toFixed(2)}`;

   useEffect(()=>{
    console.log("hello");
    if(ctx.totalAmount===0){
        sethasItem(false);
        setForm(false);
       
    }else{
        sethasItem(true);
       
    }
  },[ctx.totalAmount]);
//    const cartItem=

   const disableCart=()=>{
    props.onDisable();
   }

   const onAddHandler=(item)=>{
    console.log(item);
    ctx.addItem(item);
   };
   const onRemoveHandler=(id)=>{
    ctx.removeItem(id);
   };

   const formHandler=()=>{
   
        setForm(true);

   }

   const closeForm=()=>{
    setForm(false);
   }
   

    return <Modal onChange={props.onDisable}>
        <ul className={classes['cart-items']}>{
        ctx.item.map(items=>
        <CartItem key={items.id}
        id= {items.id}
        name={items.name}
        price={items.price}
        amount={items.quantity}
        onAdd={onAddHandler}
        onRemove={onRemoveHandler}
        ></CartItem>)}</ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{tAmount}</span>
        </div>
        {!isForm && <div className={classes.actions}>
            <button onClick={disableCart} className={classes['button--alt']  }>Close</button>
          {hasItem && <button className={classes.button} onClick={formHandler}>Order</button>} 
        </div>}
        {isForm && <OrderForm close={closeForm}/>}
    </Modal>
};

export default Cart;