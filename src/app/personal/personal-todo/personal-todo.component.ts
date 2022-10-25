import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-personal-todo',
  templateUrl: './personal-todo.component.html',
  styleUrls: ['./personal-todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalTodoComponent implements OnInit {
  @Input() task!: Todo;

  constructor() {}

  ngOnInit(): void {}

  get getChangeDetection() {
    console.log('Hello I am change detection', this.task.name);
    return true;
  }
}
