import { Action } from '@ngrx/store';

export const ADD_TASK = '[Tasks] Add Task';
export const ADD_TASK_SUCCESS = '[Tasks] Add Task Success';
export const ADD_TASK_FAIL = '[Tasks] Add Task Fail';
export const LOAD_TASKS = '[Tasks] Load Tasks';
export const LOAD_TASK_SUCCESS = '[Tasks] load Tasks Success';
export const LOAD_TASK_FAIL = '[Tasks] load Tasks Fail';

export class LoadAction implements Action {
    readonly type = LOAD_TASKS;
}

export class LoadSuccessAction implements Action {
    readonly type = LOAD_TASK_SUCCESS;

    constructor(public payload: any[]) {}
}

export class LoadFailAction implements Action {
    readonly type = LOAD_TASK_FAIL;

    constructor(public payload: any) {}
}

export type Actions = LoadAction | LoadSuccessAction | LoadFailAction;
