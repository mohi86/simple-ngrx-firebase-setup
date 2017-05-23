import { DataService } from 'app/data.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';

import * as tasks from '../actions/tasks';


@Injectable()
export class TasksEffects {

    @Effect()
    loadTasks$: Observable<Action> = this.actions$
    .ofType(tasks.LOAD_TASKS)
    .startWith(new tasks.LoadAction())
    .switchMap(() => this.db.getTodos()
        .map((todos) => {
            console.log(todos);
            return new tasks.LoadSuccessAction(todos)
        })
    );

    constructor(private actions$: Actions, private db: DataService) {}
}
