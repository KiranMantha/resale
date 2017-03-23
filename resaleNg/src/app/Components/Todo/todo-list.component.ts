import { Component, Inject, forwardRef, Host } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoModal } from '../../Modals/todo.modal';

@Component({
    selector: '[todo-list]',
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
    public Title: string = 'Hello World';
    public Todo: TodoModal = new TodoModal();
    constructor( @Inject(TodoService) public _todoService: TodoService) {
    }

    public SaveTodo(): void {
        this.Todo.id = this._todoService.Todos.length + 1;
        this._todoService.SaveTodo(this.Todo);
        this.Todo = new TodoModal();
    }
    public EditTodo(obj: TodoModal): void {
        alert(obj.name);
    }
}