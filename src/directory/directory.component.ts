import { Component } from '@angular/core';
import { DirectoryService } from './directory.service';
import { Person } from './Person/person.component';
 
@Component({
	selector: 'my-directory',
	template: `
		<button *ngFor="let company of companyList; let i = index" (click)=setCompany(company)>
				{{ company }}
		</button>
		<br/>
		<br/>
		<div *ngIf="company">
		<input type="text" placeholder="Input an employee name"
			(input)="inputDetector($event.target.value)"
			[value]="name"	
		>
		<button (click)="createEmployee()"> Create </button>
		
		<br/><br/>
		Employees in {{ company }}:
		<ul>
			<li 
				*ngFor="let person of personList; let i = index">
				{{ person.name }}
			</li>
		</ul>
		</div>
			
	`
})
export class MyDirectoryComponent {

	company: string;
	companyList = [];
	personList = [];
	tempEmployee: string;
	name = '';

	constructor (public directoryService: DirectoryService) {
		this.companyList = directoryService.getCompanies();
		this.company = directoryService.getCompany();
	}
	
	inputDetector( value: string ) {
	 	this.tempEmployee = value;
	}

	// createTodo( task: string ) {
	// 	this.todoservice.createTodo(this.task);
	// }

	// completeTask( task: string ) {
	// 	this.todoservice.completeTask( task );
	// 	this.taskList = this.todoservice.getCurrentTasks();
	// }

	setCompany(company) {
		this.directoryService.setCompany(company);
		this.company = company;
		this.personList = this.directoryService.getEmployees();
	}

	createEmployee() {
		let person = new Person();
		person.name = this.tempEmployee;
		person.company = this.company;
		this.directoryService.addEmployee(person);
		this.name = '';
		this.personList = this.directoryService.getEmployees();
	}
}