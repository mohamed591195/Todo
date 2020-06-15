import React from 'react';
import { ActionCreators } from 'redux-undo';
import { connect } from 'react-redux';


const UndoRedo = ({ canUndo, canRedo, undo, redo }) => {

    return (
        <>
            <button disabled={!canUndo} onClick={undo}> Undo </button>
            <button disabled={!canRedo} onClick={redo}> Redo </button>
        </>
    );

}

const mapStateToProps = (state) => ({

    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
})

const mapDispatchToState = (dispatch) => ({
    undo: () => dispatch(ActionCreators.undo()),
    redo: () => dispatch(ActionCreators.redo())
})

export default connect(mapStateToProps, mapDispatchToState)(UndoRedo);