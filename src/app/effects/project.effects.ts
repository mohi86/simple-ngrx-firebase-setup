import { DataService } from 'app/data.service';
import { Injectable } from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';

import * as projects from '../actions/project.actions';

@Injectable()
export class ProjectsEffects {

    @Effect()
    loadProjects$: Observable<Action> = this.actions$
    .ofType(projects.LOAD_PROJECTS)
    .startWith(new projects.LoadAction())
    .switchMap(() => this.db.getProjects()
        .map((proj) => {
                console.log('projects', proj);
                return new projects.LoadSuccessAction(proj);
            })
        );

    constructor(private actions$: Actions, private db: DataService) {}
}
