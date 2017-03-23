import { Component, NgZone, Input, Output, EventEmitter } from "@angular/core";
import { KeysPipe } from "../../Pipes/keys.pipe";
import * as _ from 'lodash';

@Component({
    selector: '[grid-view]',
    templateUrl: 'Components/GridView/grid-view.tpl.html'
})

export class GridView {
    constructor(private zone: NgZone) { }

    @Input() gvOptions: any = {
        data: [],
        columnDefs: [],
        showActions: false,
        actionsToShow: ['VIEW', 'EDIT', 'DELETE']
    };

    @Output() viewEvent = new EventEmitter();
    @Output() editEvent = new EventEmitter();
    @Output() deleteEvent = new EventEmitter();

    private _view(evt: any, row: any) {
        this.viewEvent.next({ event: evt, modal: row });
    }

    private _edit(evt: any, row: any) {
        this.editEvent.next({ event: evt, modal: row });
    }

    private _delete(evt: any, row: any) {
        this.deleteEvent.next({ event: evt, modal: row });
    }
}
