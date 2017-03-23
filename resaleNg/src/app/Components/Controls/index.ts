import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CheckboxComponent } from './checkbox.component';
import { RadioboxComponent } from './radio.component';
import { DropdownComponent } from './dropdown.component';
import { TextBoxComponent } from './textbox.component';
import { ValidationMessagesComponent } from './validation-messages.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        CheckboxComponent,
        RadioboxComponent,
        DropdownComponent,
        TextBoxComponent,
        ValidationMessagesComponent
    ],
    exports: [
        CheckboxComponent,
        RadioboxComponent,
        DropdownComponent,
        TextBoxComponent,
        ValidationMessagesComponent
    ],
    entryComponents: [
        CheckboxComponent,
        RadioboxComponent,
        DropdownComponent,
        TextBoxComponent,
        ValidationMessagesComponent
    ]
})
export class ControlsModule { }