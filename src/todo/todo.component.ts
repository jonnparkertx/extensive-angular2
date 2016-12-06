import { Component } from '@angular/core';
import { ToDoService } from './todo.service';

@Component({
	selector: 'my-todo',
	template: `
		<input type="text" placeholder="Input a task"
			(input)="inputDetector($event.target.value)"
		>
		<button (click)="createTodo()"> Create </button>
		<br/>
		Current Tasks:
		<ul>
			<li *ngFor="let item of taskList; let i = index">
				<my-task (completed)="completeTask($event)" [task]="item"></my-task>
			</li>
		</ul>
	`
})
export class MyToDoComponent {

	task: string;
	taskList = [];

	constructor (public todoservice: ToDoService) {
		this.taskList = todoservice.getCurrentTasks();
	}
	
	inputDetector( value: string ) {
		this.task = value;
	}

	createTodo( task: string ) {
		this.todoservice.createTodo(this.task);
	}

	completeTask( task: string ) {
		this.todoservice.completeTask( task );
		this.taskList = this.todoservice.getCurrentTasks();
	}
}