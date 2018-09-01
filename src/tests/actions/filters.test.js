import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

//SET_TEXT_FILTER Test Case(default)
test("Should setup set-text-filter object With default values", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: '',
    });
});

//SET_TEXT_FILTER Test Case(customized)
test("Should setup set-text-filter object With provided values", () => {
    const text = "abc";
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text
    });
});


//SET_START_DATE Test Case
test("Should setup set-start-date object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0),
    });
});


//SET_END_DATE Test Case
test("Should setup set-end-date object", () => {
    const action = setEndDate(moment(1));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(1),
    });
});

//SET_BY_AMOUNT
test("Should setup sort-by-date object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});

//SET_BY_DATE
test("Should setup sort-by-date object", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});