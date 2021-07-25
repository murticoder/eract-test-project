import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [isAdding, setIsAdding] = useState(false);

    const saveExpenseDatahandler = (enteredExpanseData) => {
        const expenseData = {
            ...enteredExpanseData,
            id: Math.random().toString()
        };
        props.onAddNewExpense(expenseData);
    };

    const startAddingHandler = () => {
        setIsAdding(true)
    };

    const stopAddinghandler = () => {
        setIsAdding(false);
    };

    let pageContent = <button onClick={startAddingHandler}>Add New Expense</button>;
    if (isAdding) {
        pageContent = <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} stopAdding={stopAddinghandler}/>;
    }
    return (
        <div className="new-expense">
            {pageContent}
        </div>
    )
}

export default NewExpense;