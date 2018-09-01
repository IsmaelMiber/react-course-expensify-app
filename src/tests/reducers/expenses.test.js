import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test("Should set default state", () => {
    const action = {type: "@@INIT"};
    const state = expensesReducer(undefined, action);
    expect(state).toEqual([]);
});

test("Should add expense to expenses", () =>{
    const action = {
        type: "ADD_EXPENSE",
        expense: {
            id: "20",
            amount: 30,
            description: '',
            note: '',
            createAt: moment(),
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state.length).toBeGreaterThan(expenses.length);
});

test("Should remove expense by id", () =>{
    const action = {
        type: "REMOVE_EXPENSE",
        idOfTargetExpense: "2",
    };
    const state = expensesReducer(expenses, action);
    expect(state.length).toBeLessThan(expenses.length);
});

test("Should not remove expense by a non exists id", () =>{
    const action = {
        type: "REMOVE_EXPENSE",
        id: "15",
    };
    const state = expensesReducer(expenses, action);
    expect(state.length).toBe(expenses.length);
});

test("Should edit expense", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "3",
        updates: {
            description: "This is me",
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[2].description).toBe("This is me");
});

test("Should not edit expense that didn't exist", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "500",
        updates: {
            description: "This is you",
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});