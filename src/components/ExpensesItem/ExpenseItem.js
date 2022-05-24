/** @format */
import "./ExpenseItem.css";
import ExpenseDate from "../ExpensesDate/ExpenseDate";
import Card from "../Card/Card";
import React from "react";
const ExpenseItem = (props) => {
	return (
		<Card className="expense-item">
			<ExpenseDate expDate={props.date} />
			<h2>{props.title}</h2>
			<div className="item__description">
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</Card>
	);
};

export default ExpenseItem;
