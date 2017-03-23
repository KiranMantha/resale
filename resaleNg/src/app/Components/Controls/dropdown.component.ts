import {
    Component,
    Optional,
    Inject,
    Input,
    ViewChild, 
    Output, 
    EventEmitter
} from '@angular/core';

import {
    NgModel,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';

import { ElementBase } from './Generics';

@Component({
    selector: 'dropdown',
    template: `
    <div>
      <label *ngIf="label" [attr.for]="identifier">{{label}}</label>
      <select
          [(ngModel)]="value"
          [ngClass]="{invalid: (invalid | async)}"
          [attr.id]="identifier" 
          [attr.name]="identifier"
          (change)="_onChange($event)">
        <option value="" disabled selected *ngIf="placeholder">{{placeholder}}</option>
        <ng-content></ng-content>
      </select>
      <validation-messages
        *ngIf="invalid | async"
        [messages]="failures | async">
      </validation-messages>
    </div>
  `, providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: DropdownComponent,
        multi: true,
    }]
})
export class DropdownComponent extends ElementBase<string> {
    @Input() public label: string;
    @Input() public placeholder: string;
    @Output() onChange = new EventEmitter();

    @ViewChild(NgModel) model: NgModel;

    public identifier = `dropdown-${identifier++}`;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }
    private _onChange(evt: any): void {
        this.onChange.next({event: evt});
    }
}

let identifier = 0;