import React from 'react'
import { connect } from 'react-redux'
import Link from './Link';
import { VisibilityFilters } from '../actions/types';

const Footer = () => {
    return (
        <>
            <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
            <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
            <Link filter={VisibilityFilters.SHOW_DONE}>Done</Link>
        </>
    );
}

export default Footer;