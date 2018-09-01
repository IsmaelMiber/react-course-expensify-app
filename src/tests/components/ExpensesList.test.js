import React from 'react';
import { ExpensesList } from '../../components/ExpensesList';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';

test("Should render ExpensesList with expenses", () => {
    const wrapper = shallow(<ExpensesList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test("Should render ExpensesList empty message", () => {
    const wrapper = shallow(<ExpensesList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});