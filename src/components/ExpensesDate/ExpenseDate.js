/** @format */

import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const {expDate} = props
  const month = expDate.toLocaleString('en-US', { month: 'long' });
  const day = expDate.toLocaleString('en-US', { day: '2-digit' });
  const year = expDate.getFullYear();
  return (
    <div>
      <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;
