import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';
import UndoRedo from './UndoRedo';

export default function (props) {
    return (
        <div>
            <h1>my todo list</h1>
            <TodoList />
            <AddTodo />
            <UndoRedo />
            <Footer />
        </div>
    );
}