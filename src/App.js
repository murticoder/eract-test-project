import Expenses from './components/Expenses/Expenses.js';

const App = () => {

const expenses = [
    {title:'Car Insurence' , amount : '123' , date: new Date(2021,3,28)},
    {title:'Test Deneme' , amount : '345' , date: new Date(2021,5,18)},
    {title:'Falan filan' , amount : '1212' , date: new Date(2021,1,8)}
  ];
  return (
    <div>
      <h2>Lets get started!</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
