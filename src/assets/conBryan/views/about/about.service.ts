import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { baseUriInjectionToken } from './../../utils/baseUri/baseuri.injection.token';

@Injectable()
export class AboutService {

    private BASE_URL = '';

    constructor(private http: HttpClient, @Inject(baseUriInjectionToken) baseURI: string) {
        this.BASE_URL = baseURI;
    }

    public getHeaders() {
        let headers = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Content-Type', 'application/json');
        return headers;
    }

    public callAboutRest(param: string): Observable<string> {

        const headers = this.getHeaders();

        const options = {
            headers
        };

        return this.http.get<string>(`${this.BASE_URL}/api/aboutRest/${param}`, options);
    }
}
