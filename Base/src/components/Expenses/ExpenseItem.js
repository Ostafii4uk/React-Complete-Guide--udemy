import React from "react";

import Card from "../UI/Card";
import ExpenseData from "./ExpenseData";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseData date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">$ {amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
