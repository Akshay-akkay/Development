import { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import GlassCard from "../UI/GlassCard";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };
  return (
    <GlassCard className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selected={filteredYear}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </GlassCard>
  );
}

export default Expenses;
