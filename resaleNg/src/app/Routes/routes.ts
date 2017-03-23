import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from '../Components/Todo/todo.component';


const routes: Routes = [
    { path: '', redirectTo: 'todos', pathMatch: 'full' },
    { path: 'todos', component: TodoComponent }
];

export const routing = RouterModule.forRoot(routes);