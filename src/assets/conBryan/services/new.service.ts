import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class NewService {

    url: string = 'https://swapi.co/api/people';
    primera: string = 'primera';
    segunda: string = 'segunda';
    
    constructor(public http: HttpClient){

        console.log('Soy el servicio!!')

    }

    getDatos(): Promise<any> {
        let promise = new Promise(( resolve, reject) => {
            this.http.get(`${this.url}`).subscribe((data: any) => {
                resolve(data);
            }, error => {
                reject(error);
            });
           
        });
        return promise;

        // const params = new HttpParams()
        //     .set('name', 'paco')
        //     .set('color', 'blanco')

        // return this.http.get(this.url, {params: params});

        
    }
}