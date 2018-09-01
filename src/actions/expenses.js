import uuid from 'uuid';

//ADD_EXPENSE
export const addExpense = ({description = '', note = '', amount = 0, createAt = 0} = {}) => (
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
export const removeExpense = (idOfTargetExpense) => (
    {
        type: "REMOVE_EXPENSE",
        idOfTargetExpense,
    }
);

//EDIT_EXPENSE
export const editExpense = (id, updates) => (
    {
        type: "EDIT_EXPENSE",
        id,
        updates,
    }
);