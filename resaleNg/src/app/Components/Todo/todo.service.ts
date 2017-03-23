import { Injectable } from '@angular/core';
import { TodoModal } from '../../Modals/todo.modal';

@Injectable()
export class TodoService {
    public Todos:Array<TodoModal> = [];
    public SaveTodo(obj:TodoModal):void {
        this.Todos.push(obj);
    }
}