import React from "react";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import Expenses from "./Expenses";

const ExpenseItem=(props)=> {
 
   return (
          <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
              <h2>{props.title}</h2>
              <div className="expense-item__price">${props.amount}</div>
              <Expenses amount={props.amount} />
              <div className="expense-item__description">
                <h2>{props.locationOfExpenditure}</h2>
              </div>
            </div>
            
          </Card>
        );
    
    
  
}

export default ExpenseItem;

