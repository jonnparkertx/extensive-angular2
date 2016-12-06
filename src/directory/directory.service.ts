import { Injectable } from '@angular/core';
import { Person } from './Person/person.component';
import { data } from '../data-json'
//import { Http, HTTP_PROVIDERS } = from '@angular2/http';


@Injectable()
export class DirectoryService {
	currentCompany: string;
	companyList = [];//["Extensis","LizardTech"];
	employeeList: Person[] = [];
	filteredEmployees: Person[] = [];

	constructor() {
		this.employeeList = data;
		for (let employee of this.employeeList) {
    	if (this.companyList.indexOf(employee.company)<0) {
    		this.companyList.push(employee.company);
    	}
		}
		this.companyList.push("Extensis");
		this.companyList.push("LizardTech");
		
	}

	getCompanies(){
		return this.companyList;
	}

	getCompany(){
		return this.currentCompany;
	}

	getEmployees(){
		return this.filteredEmployees;
		//return this.employeeList;
	}

	createCompany(company: string) {
		this.companyList.push(company);
	}

	addEmployee(person: Person){
		this.employeeList.push(person);
		this.filteredEmployees = this.employeeList.filter(employee => employee.company === this.currentCompany);
	}

	setCompany(company: string){
		this.currentCompany = company;
		this.filteredEmployees = this.employeeList.filter(employee => employee.company === this.currentCompany);
	}
}