import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense =()=>{
    return(
        <div className="new">
            <form>
                <ExpenseForm/>

            </form>

        </div>

    );

}
export default NewExpense;