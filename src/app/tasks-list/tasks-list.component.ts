import { State } from './../reducers/tasks';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import * as tasks from '../reducers/tasks';

@Component({
  selector: 'app-tasks-list',
  template: `
    <div>
      <ul>
        <li *ngFor="let item of (tasks$ | async)">
          {{item.title}}
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class TasksListComponent implements OnInit {
  tasks$: Observable<any>;
  constructor(store: Store<State>) {
    this.tasks$ = store.select(tasks.getTasks);
  }

  ngOnInit() {
    this.tasks$.subscribe((data)=>{
      console.log(data)
    })
  }

}
