import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test("Should ExpenseForm render correctly", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("Should ExpenseForm render correctly with expense data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test("Should render error fr invalid form submition", () => {
    const wrapper = shallow(<ExpenseForm />);
        //Before Submition
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
        //After Submition
    expect(wrapper).toMatchSnapshot();
});

test("Should set Description on input change", () => {
    const value = "This is New Description";
    const wrapper = shallow(<ExpenseForm />);
        //Before Changing
    expect(wrapper).toMatchSnapshot();
    wrapper.find("input").at(0).simulate("change", {
        target: { value }
    });
    expect(wrapper.state("description")).toBe(value);
    //After  Changing
    expect(wrapper).toMatchSnapshot();
});

test("Should set Note on textarea change", () => {
    const value = "This is New Note"
    const wrapper = shallow(<ExpenseForm />);
    //Before Changing
    expect(wrapper).toMatchSnapshot();
    wrapper.find("textarea").simulate("change", {
        target: {value}
    });
    expect(wrapper.state("note")).toBe(value);
    //After  Changing
    expect(wrapper).toMatchSnapshot();
});

test("Should set amount if valid data", () => {
    const value = "22.50";
    const wrapper = shallow(<ExpenseForm />);
    //Before Changing
    expect(wrapper).toMatchSnapshot();
    wrapper.find("input").at(1).simulate("change", {
        target: { value }
    });
    expect(wrapper.state("amount")).toBe("22.50");
    //After  Changing
    expect(wrapper).toMatchSnapshot();
});

test("Shouldn't set amount if not ivalid data", () => {
    const value = "22.665";
    const wrapper = shallow(<ExpenseForm />);
    //Before Changing
    expect(wrapper).toMatchSnapshot();
    wrapper.find("input").at(1).simulate("change", {
        target: { value }
    });
    expect(wrapper.state("amount")).toBe("");
    //After  Changing
    expect(wrapper).toMatchSnapshot();
});

test("Should call onSubmit prop for valid from submission", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);

    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });

    expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        createAt: expenses[0].createAt,
        note: expenses[0].note
    });

});

test("Should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onDateChange")(now);
    expect(wrapper.state("createAt")).toEqual(now);
});

test("Should focus change on focused", () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });
    expect(wrapper.state("calendarFocused")).toBe(focused);
});