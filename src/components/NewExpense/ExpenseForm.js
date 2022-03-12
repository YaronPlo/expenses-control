/** @format */

import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const {onSaveExpenseData} = props
  const [entertedTitle, setEntertedTitle] = useState();
  const [enteredAmount, setEnteredAmount] = useState();
  const [entertedDate, setEntertedDate] = useState();

  const titleChangeHandler = (event) => {
    setEntertedTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEntertedDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: entertedTitle,
      amount: enteredAmount,
      date: new Date(entertedDate),
    };
    onSaveExpenseData(expenseData);
    setEntertedTitle('');
    setEnteredAmount('');
    setEntertedDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={entertedTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={entertedDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__action'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
