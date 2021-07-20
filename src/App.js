import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {title:'Car Insurence' , amount : '123' , date: new Date(2021,3,28)},
    {title:'Test Deneme' , amount : '345' , date: new Date(2021,5,18)},
    {title:'Falan filan' , amount : '1212' , date: new Date(2021,1,8)}
  ];


  return (
    <div>
      <h2>Lets get started!</h2>
  
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>

      
    </div>
  );
}

export default App;
