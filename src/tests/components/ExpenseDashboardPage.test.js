import React from 'react';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import { shallow } from 'enzyme';

test("Should ExpenseDashboardPage render correctly", () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});