import { combineReducers } from 'redux';
import todos from './todos';
import visibility from './VisibiliyFilter';
import undoable from 'redux-undo';

export default combineReducers({
    todos: undoable(todos),
    visibility,
})