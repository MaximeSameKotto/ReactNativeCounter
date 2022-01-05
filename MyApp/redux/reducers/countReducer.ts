import { ActionType } from '../constants';
import type { Action } from '../actions/counts'

const initialState = 0

const countReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case ActionType.COUNTER_ADD:
            return state + action.payload
        case ActionType.COUNTER_SUB:
            return state - action.payload
        default:
            return state;
    }
}

export default countReducer;