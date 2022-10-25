import { Component, OnInit } from '@angular/core';
import { PersonalService } from './personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
  // This component uses OnPush

  constructor(private personalService: PersonalService) {}

  ngOnInit(): void {}

  getTodos() {
    return this.personalService.tasks;
  }
}
