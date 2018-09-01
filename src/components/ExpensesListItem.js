import React from 'react';
import { Link } from 'react-router-dom';

const ExpensesListItem = (props) => (
    <div>
        <p><Link to={`/edit/${props.id}`}>description: {props.description}</Link></p>
        <p>amount: {props.amount}</p>
        <p>createdAt: {props.createAt}</p>
        <hr />
    </div>
);

export default ExpensesListItem;