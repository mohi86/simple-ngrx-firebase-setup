import { getProjects } from './../reducers/index';
import { State } from './../reducers';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import * as fromRoot from '../reducers';

@Component({
  selector: 'app-tasks-list',
  template: `
    <div>
      <ul>
        <li *ngFor="let item of (tasks$ | async)">
          {{item.title}}
        </li>
      </ul>
      <hr>
      <ul>
        <li *ngFor="let item of (projects$ | async)">
          {{item.title}}
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class TasksListComponent implements OnInit {
  tasks$: Observable<any>;
  projects$: Observable<any>;
  constructor(store: Store<State>) {
    this.tasks$ = store.select(fromRoot.getTasks);
    this.projects$ = store.select(fromRoot.getProjects);
  }

  ngOnInit() {
    this.tasks$.subscribe((data)=>{
      console.log(data)
    })
  }

}
