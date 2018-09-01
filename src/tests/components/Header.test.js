// Shallow Rendering
    // 1. Not Care for Children Components.
    // 2. Note Care for User Interaction and Life-Cycles Events.
// Full DOM Rendering
    // 1. Care for Children Components. (render them also)
    // 2. Care for User Interaction and Life-Cycles Events.

import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test("Should Header Component render correctly", () => {
   const wrapper = shallow(<Header />);
   expect(wrapper).toMatchSnapshot();
});