export default (expenses = []) => {
    if(expenses.length) {
        const expensesAmounts = expenses.map( ({amount}) => amount);
        const reducer = (total, expenseAmount) => total + expenseAmount;
        return expensesAmounts.reduce(reducer, 0);
    } else {
        return 0;
    }
};