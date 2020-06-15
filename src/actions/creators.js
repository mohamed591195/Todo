import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './types';

let idCounter = 1;

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        id: idCounter++,
        done: false,
        text
    }
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id
})

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    payload: filter
})