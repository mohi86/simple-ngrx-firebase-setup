import {createSelector} from 'reselect';
import {ActionReducer, combineReducers} from '@ngrx/store';

// import reducers
import * as fromTasks from './tasks';
import * as fromProjects from './projects.reducer';

export interface State {
    tasks: fromTasks.State;
    projects: fromProjects.State;
}

const reducers = {
    tasks: fromTasks.reducer,
    projects: fromProjects.reducer
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state, action) {
    return productionReducer(state, action);
}

export const getTasksState = (state: State) => state.tasks;
export const getProjectsState = (state: State) => state.projects;

export const getTasks = createSelector(getTasksState, fromTasks.getTasks);
export const getProjects = createSelector(getProjectsState, fromProjects.getProjects);





