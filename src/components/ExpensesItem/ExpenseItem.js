/** @format */
import './ExpenseItem.css';
import ExpenseDate from '../ExpensesDate/ExpenseDate';
import Card from '../Card/Card';
import React, { useState } from 'react';
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Updated!');
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate expDate={props.date} />
      <div className='item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
