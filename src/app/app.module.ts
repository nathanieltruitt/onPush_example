import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { PersonalTodoComponent } from './personal/personal-todo/personal-todo.component';
import { PersonalInputComponent } from './personal/personal-input/personal-input.component';
import { WorkComponent } from './work/work.component';
import { WorkInputComponent } from './work/work-input/work-input.component';
import { WorkTodoComponent } from './work/work-todo/work-todo.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    PersonalTodoComponent,
    PersonalInputComponent,
    WorkComponent,
    WorkInputComponent,
    WorkTodoComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
