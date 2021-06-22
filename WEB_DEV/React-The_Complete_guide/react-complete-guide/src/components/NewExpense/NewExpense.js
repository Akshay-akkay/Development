import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import GlassCard from "../UI/GlassCard";
import NueCard from "../UI/NueCard";

function NewExpense(props) {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    toggleExpenseForm();
  };

  const toggleExpenseForm = () => {
    if (showExpenseForm) {
      setShowExpenseForm(false);
    } else {
      setShowExpenseForm(true);
    }
  };

  return (
    <GlassCard className="new-expense">
      {!showExpenseForm && (
        <NueCard>
          <button onClick={toggleExpenseForm}>Add New Expense</button>
        </NueCard>
      )}
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          toggleExpenseForm={toggleExpenseForm}
        />
      )}
    </GlassCard>
  );
}

export default NewExpense;
