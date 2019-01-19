package com.qugenx.service;

import com.qugenx.domain.Task;

/**
 * Created by adnenehamdouni on 05/01/2019.
 */
public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);
}
