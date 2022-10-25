import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonalService {
  _tasks: Todo[] = [
    {
      name: 'Do Laundry',
    },
    {
      name: 'Clean Dishes',
    },
    {
      name: 'Buy Groceries',
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
