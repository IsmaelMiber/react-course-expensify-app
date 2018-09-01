import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesListFilters } from '../../components/ExpensesListFilters';
import { filters, altFilters } from '../fixtures/filters';


let setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter, wrapper;

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setTextFilter = jest.fn();
    wrapper = shallow( <ExpensesListFilters
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                sortByDate={sortByDate}
                sortByAmount={sortByAmount}
                setTextFilter={setTextFilter}
                filters={altFilters}
                />);
    });

test("Should Componenet render with default data", () => {
    wrapper.setProps({filters});
    expect(wrapper).toMatchSnapshot();
});

test("Should Componenet render with alt data", () => {
    expect(wrapper).toMatchSnapshot();
});

test("Should handle text change", () => {
    wrapper.find("input").simulate("change", {
        target:{
            value: altFilters.text
        }
    });
    expect(setTextFilter).toHaveBeenCalledWith(altFilters.text);
});

test("Should sortBy date", () => {
    wrapper.find("select").simulate("change", {
        target: {
            value: "date"
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test("Should sortBy amount", () => {
    wrapper.setProps({filters});
    wrapper.find("select").simulate("change", {
        target: {
            value: "amount"
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test("Should handle date changes", () => {
    wrapper.find("DateRangePicker").prop("onDatesChange")(altFilters);
    expect(setStartDate).toHaveBeenCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenCalledWith(altFilters.endDate);
});

test("Should handle date focus changes", () => {
    wrapper.find("DateRangePicker").prop("onFocusChange")("startDate");
    expect(wrapper.state("focusedInput")).toBe("startDate");
});