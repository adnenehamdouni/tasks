import { Component, OnInit } from "@angular/core";
import { Task } from "../../../shared/model/task.model";
import { Config } from "src/app/shared/interfaces/config";
import { TaskService } from "src/app/shared/services/task.service";

@Component({
  selector: "app-tasks-list",
  templateUrl: "./tasks-list.component.html",
  styleUrls: ["./tasks-list.component.scss"]
})
export class TasksListComponent implements OnInit {
  config: Config;
  headers: any;

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    //this.initTasks();
    this.getTasksResponse();

    this.taskService.onTaskAdded.subscribe((task: Task) => {
      console.log(
        "TasksListComponent: ngOnInit => event is emitted by adding new task, update list with new task "
      );
      this.tasks.push(task);
    });
  }

  private initTasks() {
    console.log("TasksListComponent: initTasks here");
    /*this.tasks.push(new Task(1, "Task 1", true, "26/01/2019"));
    this.tasks.push(new Task(2, "Task 2", false, "26/01/2019"));
    this.tasks.push(new Task(3, "Task 3", false, "26/01/2019"));*/
  }

  getTasksResponse() {
    this.taskService
      .getTasks()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        //this.config = { ...resp.body };
        //this.tasks = { ...(resp.body as Array<Task>) };

        this.tasks = Array.from(resp.body.values());

        console.log(
          "TasksListComponent: initTasks => this.tasks = ",
          this.tasks
        );
      });
  }

  onTaskChange(event: any, task: Task) {
    if (event.target.checked) {
      console.log("TasksListComponent: onTaskChange => checked");
    } else {
      console.log("TasksListComponent: onTaskChange => NOT checked");
    }
    task.completed = event.target.checked;

    this.taskService.saveTask(task).subscribe(task =>
      //this.tasks.push(task)
      console.log(
        "TasksListComponent: saveTask response => " + JSON.stringify(task)
      )
    );
  }

  getDueDateLabel(task: Task) {
    return task.completed ? "label-success" : "label-primary";
  }
}
