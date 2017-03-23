import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { UserModal } from '../../Modals/todo.modal';
import { ApiWrapper } from '../../Shared/apiservice';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService extends ApiWrapper<UserModal> {
    constructor(private httpsrv:Http){
        super('https://conduit.productionready.io/api/profiles/eric', httpsrv);
    }
    private User: UserModal;

    public extractOne(res): UserModal {
        this.User = JSON.parse(res._body).profile;
        return this.User;
    }
}