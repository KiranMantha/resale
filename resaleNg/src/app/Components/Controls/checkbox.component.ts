import { Component, Input, HostListener, Host, Optional, Inject, Output, EventEmitter } from '@angular/core';
import {
    NgModel,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';
import { ValueAccessorBase } from './Generics/ValueAccessorBase';

@Component({
    selector: 'check-box',
    template: `
        <div class='checkbox'>
            <input type="checkbox"
            [(ngModel)]="value" 
            [attr.id]="identifier" 
            [attr.name]="{{name}}" 
            (change)="_onChange($event)"/>
            <label [attr.for]="identifier">{{label}}</label>
        </div>
    `, providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: CheckboxComponent,
        multi: true,
    }]
})
export class CheckboxComponent extends ValueAccessorBase<boolean> {
    constructor(
        @Optional() @Inject(NG_VALIDATORS) private validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) private asyncValidators: Array<any>,
    ) {
        super(); // ValueAccessor base
    }
    @Input() public label: string;
    @Input() public name: string;
    @Output() onChange = new EventEmitter();
    public identifier = `checkbox-${identifier++}`;
    private _onChange(evt: any): void {
        this.onChange.next({event: evt});
    }
}  
let identifier = 0;


