import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo as toggle } from '../actions/creators';

const Todo = ({ id, text, done, toggleTodo }) => {

    return (
        <li
            onClick={() => toggleTodo(id)}
            style={{ textDecoration: done ? 'line-through' : 'none' }}
        >
            {text}
        </li>
    );

}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggle(id))
})

export default connect(null, mapDispatchToProps)(Todo);