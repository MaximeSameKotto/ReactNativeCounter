import { ActionType } from '../constants';

interface Counter_add {
    type: ActionType.COUNTER_ADD,
    payload: number
}

interface Counter_sub {
    type: ActionType.COUNTER_SUB,
    payload: number
}

export type Action = Counter_add | Counter_sub