import React from "react";
import './ExpenseForm.css';

const ExpenseForm=()=>{
    return(
        <form>
            <div className="control">
                <div className="aa">
                    <label>title</label>
                    <input type="text"></input>
                </div>
                <div className="aa">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="1"></input>
                </div>
                <div className="aa">
                    <label>Date</label>
                    <input type="date"></input>
                </div>


             </div>
             <div className="submit">
                <button type =" submit"> expense</button>
             </div>
        </form>
    );

}
export default ExpenseForm;