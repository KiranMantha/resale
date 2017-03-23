import { Component, Inject, forwardRef, Host } from '@angular/core';
import { TodoModal } from '../../Modals/todo.modal';
import { DialogService } from '../Dialog/dialog.service';

@Component({
    selector: '[todo]',
    templateUrl: './todo.component.html'
})
export class TodoComponent {
    constructor(@Inject(DialogService) public _dialogService: DialogService) {
    }

    public OpenDialog(): void {
        this._dialogService.create(TodoComponent);
    }
}