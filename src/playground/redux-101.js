import { createStore } from 'redux';
import { Stream } from 'stream';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: "INCREMENT",
    incrementBy,
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: "DECREMENT",
    decrementBy,
});

const resetCount = () => ({
    type: "RESET",
});

const setCount = ({count} = {}) => ({
    type: "SET",
    count,
});

const store = createStore( (state = {count: 0}, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {count: state.count + action.incrementBy};
            break;
        default:
            return state;
    }
});


const unsbscribe = store.subscribe( () => {
    console.log(
        store.getState()
    );
} );


store.dispatch(incrementCount({type: "INCREMENT", incrementBy: 10,}))
