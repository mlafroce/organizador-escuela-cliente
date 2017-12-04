import { Injectable } from '@angular/core';
import {Request, XHRBackend, XHRConnection} from '@angular/http';

let config = require('../config');

@Injectable()
export class ApiXHRBackend extends XHRBackend {
    createConnection(request: Request): XHRConnection {
        if (request.url.startsWith('/')){
            request.url = config.apiUrl + request.url;     // prefix base url
        }
        return super.createConnection(request);
    }
}