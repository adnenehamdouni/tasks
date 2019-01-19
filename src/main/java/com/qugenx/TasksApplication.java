package com.qugenx;

import com.qugenx.domain.Task;
import com.qugenx.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@SpringBootApplication
public class TasksApplication {

	public static void main(String[] args) {
		SpringApplication.run(TasksApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(TaskService taskService) {

		return args -> {
			taskService.save(new Task(1L, "Create Spring Boot Application", LocalDate.now(), true));
			taskService.save(new Task(2L, "Create Spring Project Package", LocalDate.now().plus(1, ChronoUnit.DAYS), false));

		};

	}

}


