import { Injectable } from '@angular/core';
import {Request, XHRBackend, XHRConnection} from '@angular/http';

@Injectable()
export class ApiXHRBackend extends XHRBackend {
    createConnection(request: Request): XHRConnection {
        if (request.url.startsWith('/')){
            request.url = 'http://localhost:3000' + request.url;     // prefix base url
        }
        return super.createConnection(request);
    }
}