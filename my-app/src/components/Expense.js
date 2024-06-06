import React , {useState} from "react";
import './Expense.css';
import Card from './Card';

function Expense(props){
    const Month = props.date.toLocaleString('en-us', {month :'long'});
    const year =props.date.getFullYear();
    const day =props.date.toLocaleString('en-us', {day :'2-digit'});
    const[newTitle , setNewTitle ] = useState("hi");
        const[title , setTitle]= useState(props.title);
        
        
        const c=()=>{
            setTitle(newTitle);
        }
    
        const change=(event)=>{
            setNewTitle(event.target.value);
        }
    

    return (
        <Card>{<>
        <div>{ Month } </div>
        <div> { year }</div>
        <div> { day }</div>
        <div className='c'>
            <div className='i'><h3>
         {title} </h3></div>
        <div className='p'>{props.amount} </div>
        <input type="text" value={newTitle} onChange={change}/>
        <button onClick={c}>change title</button></div>
        </>}</Card>
    )
}

export default Expense;