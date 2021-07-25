import { useState } from 'react';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js';

const DUMMY_EXPENSES = [
  { id: '1', title: 'Car Insurence', amount: '123', date: new Date(2021, 3, 28) },
  { id: '2', title: 'Test Deneme', amount: '345', date: new Date(2021, 5, 18) },
  { id: '3', title: 'Falan filan', amount: '1212', date: new Date(2021, 1, 8) }
];


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };


  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
