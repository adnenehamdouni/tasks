import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { TasksAddComponent } from './components/tasks/tasks-add/tasks-add.component';
import { TasksListComponent } from './components/tasks/tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksAddComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
