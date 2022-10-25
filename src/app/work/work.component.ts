import { Component, OnInit } from '@angular/core';
import { WorkService } from './work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements OnInit {
  constructor(private workService: WorkService) {}

  ngOnInit(): void {}

  getTasks() {
    return this.workService.tasks;
  }
}
