import { useState } from "react";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import GlassCard from "../UI/GlassCard";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => filteredYear === expense.date.getFullYear().toString()
  );

  return (
    <GlassCard className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selected={filteredYear}
      />
      <ExpensesList expenses={filteredExpenses} />
    </GlassCard>
  );
}

export default Expenses;
