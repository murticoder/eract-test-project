import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDatahandler = (enteredExpanseData) => {
        const expenseData = {
            ...enteredExpanseData,
            id: Math.random().toString()
        };
        props.onAddNewExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} />
        </div>
    )
}

export default NewExpense;