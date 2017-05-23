import { LOAD_TASK_SUCCESS } from './../actions/tasks';
import { Action } from '@ngrx/store';
import * as tasks from '../actions/tasks';

export interface State {
    loaded: boolean;
    loading: boolean;
    tasks: any[];
}

const initialState: State = {
    loaded: false,
    loading: false,
    tasks: []
};

export function reducer(state = initialState, action: tasks.Actions): State {
    switch (action.type) {
        case tasks.LOAD_TASKS: {
            return Object.assign({}, state, {
                loading: true
            });
        }
        case tasks.LOAD_TASK_SUCCESS: {
            const todos = action.payload;
            console.log(todos);
            return {
                loaded: true,
                loading: false,
                tasks: todos
            };
        }
        default: {
            return state;
        }
    }
}

export const getTasks = (state: State) => {
    console.log('hey', state);
    return state.tasks;
}
