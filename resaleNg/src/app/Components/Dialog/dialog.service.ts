import { Component, Inject, Injectable, Type } from '@angular/core';
import { DialogContainerComponent } from './dialog-container.component';
import { DialogComponent } from './dialog.component';
import { GlobalService } from './dialog.global.service';

@Injectable()
export class DialogService {

    constructor( @Inject(GlobalService) private _gs: GlobalService) { }

    public create(_bodyComponent?: Type<Component>): void {
        this._gs.dialogContainer.createDialog(DialogComponent, _bodyComponent);
    }
}