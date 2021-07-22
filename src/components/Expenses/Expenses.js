import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
        <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
        <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
        <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
      </Card>
    </div>

  )
}

export default Expenses