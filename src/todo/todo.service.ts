import { Injectable } from '@angular/core';

@Injectable()
export class ToDoService {
	taskList = [];

	getCurrentTasks(){
		return this.taskList;
	}

	createTodo(task: string) {
		console.log("Creating a ToDo: ", task);
		this.taskList.push(task);

		console.log("Tasks: "+this.taskList);
	}

	completeTask( item: any) {
		console.log("Complete Task: "+item);
		var taskList = this.taskList.filter(value => value === item);
		this.taskList = taskList;
	}
}