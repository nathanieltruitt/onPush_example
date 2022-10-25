import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  @Input() task!: Todo;

  constructor() {}

  ngOnInit(): void {}
}
