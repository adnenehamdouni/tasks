import { Component, OnInit } from "@angular/core";
import { Task } from "../../../shared/model/task.model";

@Component({
  selector: "app-tasks-list",
  templateUrl: "./tasks-list.component.html",
  styleUrls: ["./tasks-list.component.scss"]
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];

  constructor() {}

  ngOnInit() {
    this.initTasks();
  }

  private initTasks() {
    console.log("TasksListComponent: initTasks here");
    this.tasks.push(new Task(1, "Task 1", true, "26/01/2019"));
    this.tasks.push(new Task(2, "Task 2", false, "26/01/2019"));
    this.tasks.push(new Task(3, "Task 3", false, "26/01/2019"));
  }

  onTaskChange(event: any, task: Task) {
    //this.task.se
  }

  getDueDateLabel(task: Task) {
    return task.completed ? "label-success" : "label-primary";
  }
}
