import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter( ({ createAt, description }) => {
            const startDateMatch = typeof startDate !== 'number' || createAt >= startDate;
            const endDateMatch = typeof endDate !== 'number' || createAt <= endDate;
            const textMatch = description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort( (a, b) => {
        if(sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1;
        } else {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

//ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createAt = 0} = {}) => (
    {
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            amount,
            description,
            note,
            createAt,
        }
    }
);

//REMOVE_EXPENSE
const removeExpense = (idOfTargetExpense) => (
    {
        type: "REMOVE_EXPENSE",
        idOfTargetExpense,
    }
);

//EDIT_EXPENSE
const editExpense = (id, updates) => (
    {
        type: "EDIT_EXPENSE",
        id,
        updates,
    }
);

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            return state.filter( expense => expense.id !== action.idOfTargetExpense );
        case "EDIT_EXPENSE":
            return state.map( expense => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates,
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

//SET_TEXT_FILTER
const setTextFilter = (text = '') => (
    {
        type: "SET_TEXT_FILTER",
        text,
    }
);

//SORT_BY_DATE
const sortByDate = () => (
    {
        type: "SORT_BY_DATE",
    }
);

//SORT_BY_AMOUNT
const sortByAmount = () => (
    {
        type: "SORT_BY_AMOUNT",
    }
);

//SET_START_DATE
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate,
});

//SET_END_DATE
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate,
});

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text,
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date",
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount",
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate,
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate,
            };
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    })
);


store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const actionOne = store.dispatch(
    addExpense({amount: 100, description: "rent", Note: "back after 30 days"})
);

const actionTwo = store.dispatch(
    addExpense({amount: 300, description: "", Note: "Frence Milk Coffe"})
);

// store.dispatch(editExpense(actionTwo.expense.id, {amount: 500, description: "This is high price coffee! :("}));

// store.dispatch(setTextFilter("coffee"));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());