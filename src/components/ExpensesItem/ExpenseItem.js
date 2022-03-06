/** @format */
import './ExpenseItem.css';
import ExpenseDate from '../ExpensesDate/ExpenseDate';
import Card from '../Card/Card';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate expDate={props.date} />
      <div className='item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
