import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  _tasks: Todo[] = [
    {
      name: 'Tell your team what to do',
    },
    {
      name: 'Get lectured by your boss',
    },
    {
      name: 'Quit',
    },
  ];
  tasks$ = new BehaviorSubject<Todo[]>(this._tasks);

  constructor() {}

  addTask(task: Todo) {
    this._tasks.push(task);
    this.tasks$.next(this._tasks.slice());
  }

  get tasks() {
    return this.tasks$.asObservable();
  }
}
