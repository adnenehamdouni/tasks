import { Component, OnInit } from "@angular/core";
import { TaskService } from "src/app/shared/services/task.service";
import { Task } from "src/app/shared/model/task.model";

@Component({
  selector: "app-tasks-add",
  templateUrl: "./tasks-add.component.html",
  styleUrls: ["./tasks-add.component.scss"]
})
export class TasksAddComponent implements OnInit {
  addTaskValue: string = null;

  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  onTaskAdd(event: any) {
    let task: Task = new Task(
      event.target.value,
      false,
      this.getTodayAsString()
    );

    "TasksListComponent: onTaskAdd event => " + JSON.stringify(event);
    "TasksListComponent: onTaskAdd input => " + JSON.stringify(task);

    this.taskService.saveTask(task).subscribe((newTask: Task) => {
      //Clear Input
      this.addTaskValue = "";
      //emit event
      this.taskService.onTaskAdded.emit(task);
      console.log(
        "TasksListComponent: saveTask response => " + JSON.stringify(newTask)
      );
    });
  }

  getTodayAsString() {
    let today = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
    let yyyy: any = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    return mm + "/" + dd + "/" + yyyy;
  }
}
