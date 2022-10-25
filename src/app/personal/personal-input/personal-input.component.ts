import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonalService } from '../personal.service';

@Component({
  selector: 'app-personal-input',
  templateUrl: './personal-input.component.html',
  styleUrls: ['./personal-input.component.css'],
})
export class PersonalInputComponent implements OnInit {
  constructor(private personalService: PersonalService) {}

  ngOnInit(): void {}

  submitTask(form: NgForm) {
    this.personalService.addTask({ name: form.value.addTask });
    form.reset();
  }
}
