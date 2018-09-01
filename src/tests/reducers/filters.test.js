import filterReducer from '../../reducers/filters';
import moment from 'moment';

test("Should set the default state", () => {
    const action = {type: "@@INIT"};
    const state = filterReducer(undefined, action);
    const defaultState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
    };

    expect(state).toEqual(defaultState);
});

//SET_TEXT_FILTER
test("Should set the text to value", () => {
    const action = {
        type: "SET_TEXT_FILTER",
        text: "This is a text",
    };
    const state = filterReducer(undefined, action);
    expect(state.text).toBe(action.text);
});

//SORT_BY_DATE
test("Should sortBy date", () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount',
    };
    const action = {type: "SORT_BY_DATE"};
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe("date");
});

//SORT_BY_AMOUNT
test("Should sortBy amount", () => {
    const action = {type: "SORT_BY_AMOUNT"};
    const state = filterReducer(undefined, action);
    expect(state.sortBy).toBe("amount");
});

//SET_START_DATE
test("Should set start date", () => {
    const action = {
        type: "SET_START_DATE",
        startDate: moment().startOf("month"),
    };
    const state = filterReducer(undefined, action);
    expect(state.startDate).toEqual(action.startDate);
});

//SET_END_DATE
test("Should set end date", () => {
    const action = {
        type: "SET_END_DATE",
        startDate: moment().endOf("month"),
    };
    const state = filterReducer(undefined, action);
    expect(state.endDate).toEqual(action.endDate);
});
