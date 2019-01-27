import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UiModule } from "./ui/ui.module";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TasksAddComponent } from "./components/tasks/tasks-add/tasks-add.component";
import { TasksListComponent } from "./components/tasks/tasks-list/tasks-list.component";
import { TaskService } from "./shared/services/task.service";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksAddComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    UiModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
