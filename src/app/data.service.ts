import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class DataService {
  todos: FirebaseListObservable<any[]>;

  constructor(private firebaseDB: AngularFireDatabase) {}
  /*
  CRUD ops for Todos module
   */
  getTodos(projectKey = null) {
    if (projectKey) {
      return this.todos = this.firebaseDB.list('/todos', {
        query: {
          orderByChild: 'project_key',
          equalTo: projectKey
        }
      });
    } else {
      return this.todos = this.firebaseDB.list('/todos');
    }
  }

  getTodo(id) {
    return this.firebaseDB.object(`/todos/${id}`);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}