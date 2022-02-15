import React,{useState,useRef} from "react"
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input" 


const MealItemForm=(props)=>{
    const [amountIsValis,setAmountIsValid]=useState(true)
    const amountRef=useRef()

   const submitHandler=(event)=>{
        event.preventDefault()

       const amountEntered=amountRef.current.value;
       const amountEnteredNumber=+amountEntered

         
         if(amountEntered.trim().length===0 || amountEnteredNumber<1 || amountEnteredNumber>5)
         {
             setAmountIsValid(false)
             return;
         }
         props.onCartAdd(amountEnteredNumber); 
      console.log(amountEnteredNumber)
   }
  
 

    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountRef}
          label="Amount"
          input={{
            type: "number",
            id: 'amount_'+props.id,
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        ></Input>
        <button>+ Add</button>
        {!amountIsValis && <p>Please Enter between 1and 5 </p>}
      </form>
    );
}

export default MealItemForm