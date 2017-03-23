import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { appConstants } from './app.constants';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/**
 * Please refer below url (stackoverflow) for implementing http wrapper.
 * http://stackoverflow.com/questions/39033038/rxjs-observables-and-generic-types-for-angular2typescript-http-wrapper
 */
export abstract class ApiWrapper<T> {
    private options: RequestOptions;
    private http:Http;
    constructor(public endpointUrl: string, public _http:any) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({ headers: headers, withCredentials: true });
        this.http = _http;
    }
    private callApi(callBack: string, method: RequestMethod, body?: JSON): any {
        this.options.headers.append('X-CSRF-Token', '');
        this.options.merge({
            method: method,
            body: body
        });

        return this.http.request(this.endpointUrl, this.options)
            .map(this[callBack])
            .catch(this.handleError);
    }

    public getAll(body?: JSON): Observable<T[]> {
        return this.callApi('extractAll', RequestMethod.Get, body);
    }

    public getOne(body?: JSON): Observable<T> {
        return this.callApi('extractOne', RequestMethod.Get, body);
    }

    abstract extractOne(res: Response): T;

    //abstract extractAll(res: Response): T[];

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}