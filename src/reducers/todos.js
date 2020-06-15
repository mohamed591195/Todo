import { ADD_TODO, TOGGLE_TODO } from '../actions/types';


export default function (state = [], { type, payload }) {

    switch (type) {

        case ADD_TODO:
            return [...state, payload];

        case TOGGLE_TODO:

            return state.map(todo => (
                (todo.id === payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            ))
        default:
            return state;
    }
}