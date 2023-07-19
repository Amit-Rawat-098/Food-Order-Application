import { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem';


// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Sushi',
//       description: 'Finest fish and veggies',
//       price: 22.99,
//     },
//     {
//       id: 'm2',
//       name: 'Schnitzel',
//       description: 'A german specialty!',
//       price: 16.5,
//     },
//     {
//       id: 'm3',
//       name: 'Barbecue Burger',
//       description: 'American, raw, meaty',
//       price: 12.99,
//     },
//     {
//       id: 'm4',
//       name: 'Green Bowl',
//       description: 'Healthy...and green...',
//       price: 18.99,
//     },
//   ];


const AvailableMeals=()=>{

const [DUMMY_MEALS, setDummyMeals]=useState([]);
const [isLoading,setLoading]=useState(true);

useEffect(()=>{
  const fetchData=async()=>{
    const response=await fetch('https://amit-project-45478-default-rtdb.firebaseio.com/meals.json');
    const responseData= await response.json();

    const loadData=[];
    for(const key in responseData){
    loadData.push({
      id: key,
      name: responseData[key].name,
      description: responseData[key].description,
      price: responseData[key].price
    })
    }
    setLoading(false);
    setDummyMeals(loadData);
  }

  fetchData();
},[]);

const mealItem=DUMMY_MEALS.map(Item=><MealItem 
  name={Item.name}
  des={Item.description} 
  price={Item.price} 
  id={Item.id} 
  key={Item.id}></MealItem>);


    return <section className={classes.meals}>
       <Card>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <ul>
            {mealItem}
        </ul>}
        
        </Card>
    </section>
};

export default AvailableMeals;