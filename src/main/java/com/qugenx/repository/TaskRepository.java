package com.qugenx.repository;

import com.qugenx.domain.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by adnenehamdouni on 05/01/2019.
 */

@Repository
public interface TaskRepository extends CrudRepository<Task, Long>{
}
