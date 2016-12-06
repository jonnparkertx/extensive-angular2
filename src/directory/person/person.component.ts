import { Component } from '@angular/core';

@Component({
	selector: 'my-person',
	template: `
	<div *ngIf="person">
		{{ person.name }}
	</div>
	`
})


export class Person {
	name: string;
	company: string;

}