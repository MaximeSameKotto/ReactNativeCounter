import { Dispatch } from "redux"
import { ActionType } from "../constants"
import { Action } from "../actions/counts"

const actions = {
    counter_add: (value: number) => ({
        type: ActionType.COUNTER_ADD,
        payload: value
    }),
    
    counter_sub: (value: number) => ({
        type: ActionType.COUNTER_SUB,
        payload: value
    })
}

export default actions