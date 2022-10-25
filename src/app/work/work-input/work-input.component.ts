import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-work-input',
  templateUrl: './work-input.component.html',
  styleUrls: ['./work-input.component.css'],
})
export class WorkInputComponent implements OnInit {
  constructor(private workService: WorkService) {}

  ngOnInit(): void {}

  submitTask(form: NgForm) {
    this.workService.addTask(form.value.addTask);
    form.reset();
  }
}
