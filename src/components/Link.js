import React, { Children } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/creators';



const Link = ({ onClick, disabled, children }) => {
    return (
        <button onClick={onClick} disabled={disabled} style={{ padding: 10 }}>
            {children}
        </button>
    );
}

const mapStateToProps = ({ visibility }, ownProps) => ({
    disabled: visibility === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link);