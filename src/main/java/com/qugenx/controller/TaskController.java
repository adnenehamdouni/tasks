package com.qugenx.controller;

import com.qugenx.domain.Task;
import com.qugenx.service.TaskService;
import lombok.extern.java.Log;
import org.springframework.web.bind.annotation.*;

/**
 * Created by adnenehamdouni on 05/01/2019.
 */

@Log
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Task> listTasks() {

        log.info("TaskController: listTasks");
        return this.taskService.list();
    }

    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task) {
        log.info("TaskController: saveTask => task " +  task);
        return this.taskService.save(task);
    }
}
