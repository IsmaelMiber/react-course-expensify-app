import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';

export const ExpensesSummary = props => (
    <p>
        Viewing {props.expensesCount} expenses totalling {numeral(props.expensesTotal / 100).format("$0,0.00")}
    </p>
);

const mapStateToProps = state => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: totalExpenses(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);