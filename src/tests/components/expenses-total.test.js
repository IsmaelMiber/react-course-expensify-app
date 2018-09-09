import totalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test("Should return 0 if no expenses", () => {
    const total = totalExpenses();
    expect(total).toBe(0);
});

test("Should add up single expense", () => {
    const total = totalExpenses([expenses[0]]);
    expect(total).toBe(expenses[0].amount);
});

test("Should add up multiple expenses", () => {
    const total = totalExpenses(expenses);
    expect(total).toBe(18);
});