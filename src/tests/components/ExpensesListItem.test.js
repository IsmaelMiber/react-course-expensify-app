import React from 'react';
import ExpensesListItem from '../../components/ExpensesListItem';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test("Should render ExpensesListItem", () => {
    const wrapper = shallow(<ExpensesListItem { ...expenses[1] } />);
    expect(wrapper).toMatchSnapshot();
});