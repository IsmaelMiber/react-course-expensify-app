import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilters from './ExpensesListFilters';

const ExpenseDashboardPage = () => (
    <div>
        This is my ExpenseDashboardPage component
        <ExpensesListFilters />
        <ExpensesList />
    </div>
);

export default ExpenseDashboardPage;