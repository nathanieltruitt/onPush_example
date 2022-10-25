import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { TodoComponent } from './shared/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    WorkComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
