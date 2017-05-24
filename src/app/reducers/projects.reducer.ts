import {Action} from '@ngrx/store';
import * as projects from '../actions/project.actions';

export interface State {
    loaded: boolean;
    loading: boolean;
    projects: any[];
}

const initialState: State = {
    loaded: false,
    loading: false,
    projects: []
};

export function reducer(state = initialState, action: projects.Actions): State {
    switch(action.type) {
        case projects.LOAD_PROJECTS: {
            return Object.assign({}, state, {
               loading: true
            });
        }
        case projects.LOAD_PROJECTS_SUCCESS: {
            const projects = action.payload;

            return {
                loaded: true,
                loading: false,
                projects
            };
        }
        default: {
            return state;
        }
    }
}

export const getProjects = (state: State) => state.projects;
