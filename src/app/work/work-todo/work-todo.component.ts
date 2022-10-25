import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-work-todo',
  templateUrl: './work-todo.component.html',
  styleUrls: ['./work-todo.component.css'],
})
export class WorkTodoComponent implements OnInit {
  @Input() task!: Todo;

  constructor() {}

  ngOnInit(): void {}

  get getChangeDetection() {
    console.log('Hello I am change detection', this.task.name);
    return true;
  }
}
