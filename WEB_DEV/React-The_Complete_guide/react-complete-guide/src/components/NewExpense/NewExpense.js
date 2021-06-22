import React from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import GlassCard from "../UI/GlassCard";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <GlassCard className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </GlassCard>
  );
}

export default NewExpense;
