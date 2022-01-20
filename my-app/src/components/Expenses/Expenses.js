import {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../../styling/Card";
import './Expenses.css'
import ExpensesList from "./ExpensesList";


const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const expenses = props.expenses
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesList items={expenses.filter((expense => expense.date.getFullYear().toString() === filteredYear))}/>
            </Card>
        </div>);

}

export default Expenses