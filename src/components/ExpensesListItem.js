import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpensesListItem = (props) => (
    <div>
        <p><Link to={`/edit/${props.id}`}>description: {props.description}</Link></p>
        <p>amount: {numeral(props.amount / 100).format("$0,0.00")}</p>
        <p>createdAt: {moment(props.createAt).format("MMMM Do, YYYY")}</p>
        <hr />
    </div>
);

export default ExpensesListItem;