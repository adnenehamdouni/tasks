package com.qugenx.controller;

import com.qugenx.domain.Task;
import com.qugenx.service.TaskService;
import org.springframework.web.bind.annotation.*;

/**
 * Created by adnenehamdouni on 05/01/2019.
 */

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Task> listTasks() {
        return this.taskService.list();
    }

    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task) {
        return this.taskService.save(task);
    }
}
