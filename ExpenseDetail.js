import "./ExpenseItem.css";

function ExpenseDetail(props){
return(
<div className="expense-item__description">
           <h2>{props.title}</h2>
             <div className="expense-item__price">${props.amount}</div>
             <div className="expense-item__description">
               <h2>{props.locationOfExpenditure}</h2>
             </div>
          </div>
               );
           }
export default ExpenseDetail;