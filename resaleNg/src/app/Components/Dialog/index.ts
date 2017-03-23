import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { DialogContainerComponent } from './dialog-container.component';
import { DialogService } from './dialog.service';
import { GlobalService } from './dialog.global.service';

@NgModule({
    declarations: [DialogContainerComponent, DialogComponent],
    exports: [DialogContainerComponent],
    providers: [DialogService, GlobalService],
    entryComponents: [DialogComponent]
})
export class DialogModule { }