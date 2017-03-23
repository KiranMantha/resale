import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridView } from './grid-view.component';
import { KeysPipe } from "../../Pipes/keys.pipe";

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        GridView,
        KeysPipe
    ],
    exports: [GridView]
})
export class GridModule { }