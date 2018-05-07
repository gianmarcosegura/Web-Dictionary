import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PruebaService {

    public url: string;

    constructor(
        public http: HttpClient
    ) {
        this.url = 'https://api.pokemontcg.io/v1/';
    }

    getProductos(): Observable<any> {
        return this.http.get(this.url);
    }

    // addProducto(producto: Producto): Observable<any>{
    //     let json = JSON.stringify(producto);
    //     let params = "json="+json;
    //     let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    //     return this.http.post(this.url+'productos', params, {headers: headers});
    }

