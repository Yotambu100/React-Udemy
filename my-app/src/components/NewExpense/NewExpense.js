import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = props => {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpenseHandler(expenseData)
        stopEditingHandler()
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
      setIsEditing(false)
    }
    if (isEditing) {
        return (
            <div className='new-expense'>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>
            </div>
        )
    } else {
        return (
            <div className='new-expense'>
                <button onClick={startEditingHandler}>Add new expense</button>
            </div>
        );
    }


}

export default NewExpense