import './polyfills.browser';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { MyToDoComponent } from './todo/todo.component';
import { MyTask } from './todo/task/task.component';
import { ToDoService } from './todo/todo.service';
import { MyDirectoryComponent } from './directory/directory.component';
import { DirectoryService } from './directory/directory.service';


@Component({
	selector: 'app',
	template: `
		Hello Extensis. Do You Wanna Build A Snowman?
		<my-todo></my-todo>

		<my-directory></my-directory>
	`
})
class AppComponent{}

@NgModule({
	bootstrap: [ AppComponent ],
	declarations: [ 
		AppComponent,
		MyToDoComponent,
		MyTask,
		MyDirectoryComponent
	],
	imports: [
		BrowserModule

	],
	providers: [
		ToDoService,
		DirectoryService
	]
})
class MainModule {
	
}

var platform = platformBrowserDynamic();

platform.bootstrapModule(MainModule);