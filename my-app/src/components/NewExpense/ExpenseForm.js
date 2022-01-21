import React, {useState} from "react";
import './ExpenseForm.css'
import expenseDate from "../Expenses/ExpenseDate";

const ExpenseForm = props => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value)
    }

    const [enteredAmount, setEnteredAmount] = useState('')
    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value)
    }

    const [enteredDate, setEnteredDate] = useState('')
    const dateChangeHandler = event => {
        setEnteredDate(event.target.value)
    }


    const submitHandler = event => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} onChange={amountChangeHandler} min='0.01' step='0.01'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>);
}

export default ExpenseForm