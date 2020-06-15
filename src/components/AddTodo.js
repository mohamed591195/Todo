import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/creators';

const AddTodo = ({ dispatch }) => {
    let input = createRef();

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if (!input.current.value.trim()) {
                return
            }
            dispatch(addTodo(input.current.value.trim()));
            input.current.value = '';
        }
        }>
            <input ref={input} />
            <button type="submit">Add</button>
        </form>
    );
}

export default connect()(AddTodo);