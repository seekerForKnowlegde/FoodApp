import React,{useContext} from "react"
import classes from "./MealItem.module.css"

import CartContext from "../../../store/card-context";
import MealItemForm from "./MealItemForm";





const MealItem=(props)=>{

     const cartCtx=useContext(CartContext)

   //  console.log(cartCtx.addItem)
  const price = `$${props.price.toFixed(2)}`;

       const addToCartHandler = (amount) => {
         cartCtx.addItem({
           id: props.id,
           name: props.name,
           amount: amount,
           price: props.price,
         })
       };

    

     return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            
             <div className={classes.description}>{props.description}</div>

             <div className={classes.price}>{price}</div>
        </div>
         <MealItemForm id={props.id} onCartAdd={addToCartHandler}></MealItemForm>
        <div>
           
        </div>

     </li>


}

export default MealItem