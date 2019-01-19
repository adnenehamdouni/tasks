package com.qugenx.service;

import com.qugenx.domain.Task;
import com.qugenx.repository.TaskRepository;
import org.springframework.stereotype.Service;

/**
 * Created by adnenehamdouni on 05/01/2019.
 */

@Service
public class TaskServiceImpl implements TaskService {

    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Iterable<Task> list() {
        return this.taskRepository.findAll();
    }

    @Override
    public Task save(Task task) {
        return this.taskRepository.save(task);
    }
}
