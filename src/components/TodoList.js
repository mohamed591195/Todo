import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { VisibilityFilters } from '../actions/types'

class TodoList extends React.Component {

    getVisibleTodos() {
        const { todos, visibility } = this.props;

        switch (visibility) {

            case VisibilityFilters.SHOW_ALL:
                return todos;

            case VisibilityFilters.SHOW_DONE:
                return todos.filter(todo => todo.done === true);

            case VisibilityFilters.SHOW_ACTIVE:
                return todos.filter(todo => todo.done === false);

            default:
                throw Error("unkown filter" + visibility);
        }
    }

    render() {

        return (
            <ul>
                {this.getVisibleTodos().map(todo => (<Todo key={todo.id} {...todo} />))}
            </ul>
        );
    }
}

const mapStateToProps = ({ todos, visibility }) => ({ todos: todos.present, visibility });

export default connect(mapStateToProps)(TodoList);