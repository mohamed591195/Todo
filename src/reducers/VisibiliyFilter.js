import { SET_VISIBILITY_FILTER } from '../actions/types';
import { VisibilityFilters } from '../actions/types';


export default function (state = VisibilityFilters.SHOW_ALL, { type, payload }) {
    switch (type) {
        case SET_VISIBILITY_FILTER:
            return payload;
        default:
            return state;
    }
}