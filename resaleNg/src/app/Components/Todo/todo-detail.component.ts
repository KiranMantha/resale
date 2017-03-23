import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TodoService } from "./todo.service";
import { TodoModal } from "../../Modals/todo.modal";
import { UserModal } from "../../Modals/todo.modal";
import { UserService } from "./user.service";

@Component({
    selector: '[todo-details]',
    templateUrl: './todo-detail.component.html'
})

export class TodoDetailsComponent {
    private _todoModal: TodoModal;
    public user: UserModal;
    constructor(private _route: ActivatedRoute, @Inject(TodoService)private _todoService: TodoService,
    @Inject(UserService)private usrservice:UserService) {

    }

    ngOnInit() {
        if (this._route.snapshot.params['id']) {
            let id = parseInt(this._route.snapshot.params['id'], 10);
            this._todoModal = this._todoService.Todos[id - 1];
        } else {
            this._todoModal = this._todoService.Todos[1];
        }
        this.usrservice.getOne().subscribe(x=>{
            this.user = x;
        });
    }
}