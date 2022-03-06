/** @format */

import ExpenseItem from '../ExpensesItem/ExpenseItem';
import './Expenses.css';
import Card from '../Card/Card';

const Expense = (props) => {
  const { allExpenses } = props;

  return (
    <Card className='expenses'>
      <ExpenseItem
        title={allExpenses[0].title}
        amount={allExpenses[0].amount}
        date={allExpenses[0].date}
      />
      <ExpenseItem
        title={allExpenses[1].title}
        amount={allExpenses[1].amount}
        date={allExpenses[1].date}
      />
      <ExpenseItem
        title={allExpenses[2].title}
        amount={allExpenses[2].amount}
        date={allExpenses[2].date}
      />
      <ExpenseItem
        title={allExpenses[3].title}
        amount={allExpenses[3].amount}
        date={allExpenses[3].date}
      />
    </Card>
  );
};

export default Expense;
