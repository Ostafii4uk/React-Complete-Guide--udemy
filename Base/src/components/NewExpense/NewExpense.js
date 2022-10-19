import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const seveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random()
    }

    props.onAddExpense(expenseData)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const cancleEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Open</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={seveExpenseDataHandler} onCancle={cancleEditingHandler} />}
    </div>
  );
};

export default NewExpense;
