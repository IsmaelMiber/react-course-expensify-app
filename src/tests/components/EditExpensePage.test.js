import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach( () => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
        expense={expenses[0]}
        editExpense={editExpense}
        removeExpense={removeExpense}
        history={history}
        />);
});

test("Should EditExpensePage render correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("Should EditExpense handle correctly", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
    expect(editExpense).toHaveBeenCalledWith(expenses[0].id, expenses[0]);
    expect(history.push).toHaveBeenCalledWith('/');
});

test("Should removeExpense handle correctly", () => {
    wrapper.find("button").simulate("click");
    expect(removeExpense).toHaveBeenCalledWith(expenses[0].id);
    expect(history.push).toHaveBeenCalledWith('/');
});

