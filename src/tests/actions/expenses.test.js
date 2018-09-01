import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

//REMOVE_EXPENSE Test Case
test("Should setup remove expense action object", () => {
    const action = removeExpense("abc123");
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        idOfTargetExpense: "abc123",
    });
});

//EDIT_EXPENSE Test Case
test("Should setup edit expense action object", () => {
    const action = editExpense("abc123", {amount: 123});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "abc123",
        updates: {
            amount: 123,
        },
    });
});

//ADD_EXPENSE Test Case [default]
test("Should setup add expense action object With default values", () => {
    const action = addExpense();
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            amount: 0,
            createAt: 0,
            description: '',
            note: '',
        }
    });
});

//ADD_EXPENSE Test Case [customized]
test("Should setup add expense action object With provided values", () => {
    const expenseData = {amount: 10, createAt: 20, description: 'abc', note: 'abc'};
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            ...expenseData,
        }
    });
});