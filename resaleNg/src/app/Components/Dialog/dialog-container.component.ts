import { Component, Type, ViewContainerRef, ComponentRef, ComponentFactoryResolver, AfterViewInit, Inject } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { GlobalService } from './dialog.global.service';

@Component({
    selector: '[dialog-container]',
    template: ''
})
export class DialogContainerComponent implements AfterViewInit {
    constructor(private viewContainer: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver, private _globalService: GlobalService) { }

    public createDialog(dialogComponent: { new (): DialogComponent }, _bodyComponent: Type<Component>): ComponentRef<DialogComponent> {
        this.viewContainer.clear();

        let dialogComponentFactory =
            this.componentFactoryResolver.resolveComponentFactory(dialogComponent);
        let dialogComponentRef = this.viewContainer.createComponent(dialogComponentFactory);

        dialogComponentRef.instance.close.subscribe(() => {
            this.viewContainer.element.nativeElement.ownerDocument.body.className = ''
            dialogComponentRef.destroy();
        });

        dialogComponentRef.instance.open(_bodyComponent);

        return dialogComponentRef;
    }

    ngAfterViewInit() {
        this._globalService.dialogContainer = this;
    }
}