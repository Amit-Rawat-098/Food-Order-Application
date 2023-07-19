import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import ContextProvider from "./Store/ContextProvider";

function App() {

  const [enableCart, setEnable]= useState(false);

const cartHandler=()=>{
  console.log('Trigger');
  setEnable(true);
}
const disable=()=>{
  setEnable(false);
}
  return (
   <ContextProvider>
   {enableCart && <Cart onDisable={disable} />}
   
   <Header onEnable={cartHandler}></Header>
   <main>
    <Meals />
   </main>
   </ContextProvider>
  );
}

export default App;
