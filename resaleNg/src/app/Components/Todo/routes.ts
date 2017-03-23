import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from "./todo-list.component";
import { TodoDetailsComponent } from "./todo-detail.component";

const todoroutes: Routes = [
    {
        path: 'todos',
        component: TodoComponent,
        children: [
            { path: '', component: TodoListComponent },
            { path: ':id', component: TodoDetailsComponent }
        ]
    }
];

export const todorouting = RouterModule.forChild(todoroutes);