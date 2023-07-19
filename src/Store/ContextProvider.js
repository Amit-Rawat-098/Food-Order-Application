import React,{useReducer} from 'react';
import CartContext from './cart-context';

const defaultValue={item: [ {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    quantity: 0
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
    quantity: 0
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
    quantity: 0
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
    quantity: 0
  }],
amount: 0};

const update=(state,action)=>{

// Adding new meals
if(action.type==='ADD'){


   state.item.forEach(ele => {
    if(ele.id===action.item.id){
        ele.quantity+=+action.item.amount;
        console.log(ele);
    }
   });
   
    const updatedAmount= state.amount + action.item.amount * action.item.price;
    
    return {item: state.item , amount:updatedAmount };
}
// Removeing a meal

if(action.type==='REMOVE'){

    var itemToDelete=0;
    state.item.forEach(ele=>{
        if(ele.id===action.id){
            itemToDelete=ele.price;
            ele.quantity--;
        }
    });
   


    const updatedAmount= state.amount - itemToDelete;

    return {item: state.item, amount:updatedAmount};
}

    return defaultValue;
}

const ContextProvider= (props)=>{

const [contState, dispatch]=useReducer(update, defaultValue);

const addItemToCart=(item)=>{
   dispatch({type:'ADD', item: item});
};

const removeItemFromCart= (id)=>{
    dispatch({type:'REMOVE', id: id});
};

const cartContext= {
    item: contState.item,
    totalAmount: contState.amount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart
}

return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>

};

export default ContextProvider;