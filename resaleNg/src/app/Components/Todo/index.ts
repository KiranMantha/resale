import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DialogModule } from '../Dialog';

import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list.component';
import { TodoDetailsComponent } from './todo-detail.component';
import { TodoService } from './todo.service';
import { UserService } from './user.service';
import { todorouting } from './routes';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DialogModule,
        todorouting
    ],
    providers: [TodoService, UserService],
    declarations: [TodoComponent, TodoListComponent, TodoDetailsComponent],
    exports: [TodoComponent, TodoListComponent, TodoDetailsComponent],
    entryComponents: [TodoComponent, TodoListComponent, TodoDetailsComponent]
})
export class TodoModule { } 