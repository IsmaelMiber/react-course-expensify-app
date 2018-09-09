import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test("Viewing 2 expenses with tottaling $5,100.00", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={5100}/>);
    expect(wrapper).toMatchSnapshot();
});

test("Viewing 1 expenses with tottaling $100.00", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={100}/>);
    expect(wrapper).toMatchSnapshot();
});