import React from "react";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/card-context"
import classes from "./Cart.module.css"

import CartItem from "./CartItems";


const Cart=(props)=>{
      const cartCxt=useContext(CartContext)
      const totalCartAmount=`$${cartCxt.totalAmount.toFixed(2)}`

      const hasItem=cartCxt.items.length>0
   
    const cartItemRemoveHandler=(id)=>{
      cartCxt.removeItem(id)
    }


    const  cartItemAddHandler=(item)=>{
      cartCxt.addItem({...item,amount:1})
    }



   const cartItems=(<ul className={classes['cart-items']}>
     {cartCxt.items.map(item=>
     <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} 
     onRemove={cartItemRemoveHandler.bind(null,item.id)}
     onAdd={cartItemAddHandler.bind(null,item)}/>)}
   </ul>)

  return (
      
  <Modal onClck={props.onClick}>
    {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalCartAmount}</span>
        </div>

        <div className={classes.actions}>
          <button className={classes["btn--alt"]} onClick={props.onClick}>Close</button>
        {  hasItem && <button className={classes.button}>Order</button>}
        </div>

      </Modal>
    );
};

export default Cart;