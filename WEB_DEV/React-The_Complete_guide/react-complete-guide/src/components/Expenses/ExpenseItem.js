import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import NueCard from "../UI/NueCard";

function ExpenseItem(props) {
  const expenseDate = props.date;
  const expenseAmount = props.amount;
  const expenseTitle = props.title;

  return (
    <li>
      <NueCard className="expense-item">
        <ExpenseDate date={expenseDate} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <NueCard className="expense-item__price">$ {expenseAmount}</NueCard>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </NueCard>
    </li>
  );
}

export default ExpenseItem;
