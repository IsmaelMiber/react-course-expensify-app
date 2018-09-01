import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';
import { shallow } from 'enzyme';

test("Should NotFoundPage render correctly", () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});