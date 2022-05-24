/** @format */
import React, { useState } from "react";
import ExpenseItem from "../ExpensesItem/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";
import Card from "../Card/Card";

const Expense = (props) => {
	const [filterYear, setFilterYear] = useState("");

	const onChangeHandler = (selectedYear) => {
		setFilterYear(selectedYear);
	};

	const filteredExpenses = props.allExpenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filterYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					filterYear={filterYear}
					onChangeFilter={onChangeHandler}
				/>
				{filteredExpenses.map((expense) => {
					return (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					);
				})}
			</Card>
		</div>
	);
};

export default Expense;
