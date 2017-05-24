import {Action} from '@ngrx/store';

export const LOAD_PROJECTS = '[Projects] Load Projects';
export const LOAD_PROJECTS_SUCCESS = '[Projects] Load Projects Success';
export const LOAD_PROJECTS_FAIL = '[Projects] Load Projects Fail';

export class LoadAction implements Action {
    readonly type = LOAD_PROJECTS;
}

export class LoadSuccessAction implements Action {
    readonly type = LOAD_PROJECTS_SUCCESS;

    constructor(public payload: any[]) {}
}

export class LoadFailAction implements Action {
    readonly type = LOAD_PROJECTS_FAIL;

    constructor(public payload: any) {}
}

export type Actions = LoadAction | LoadSuccessAction | LoadFailAction;
