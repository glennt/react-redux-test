import Immutable from 'seamless-immutable';

import { CHANGE_VIEW } from '../constants/ActionTypes'

const defaultState = {
    "view": "LIST"
}

export default function ui(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_VIEW:
            return Immutable.set(state, 'view', action.view);
        default:
            return state
    }
}