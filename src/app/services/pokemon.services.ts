import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokemonService {

    public pokeApi: string;

    constructor( public http: HttpClient ) {
        
        this.pokeApi = 'https://pokeapi.co/api/v2/';
    
    }


    getPokemonByName(name: string): Observable<any> {
        return this.http.get(`${ this.pokeApi }pokemon/${ name }`);
    }
    /*
    getImage(dir: string): Observable<any> {
        return this.http.get(dir);
    }*/

}
    /*
    private elementos: any[] =
    [
        {
            titulo: 'HTML5',
            descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            imagen: '../../../assets/html.png'
        },
        {
            titulo: 'CSS3',
            descripcion: 'Thiaaas is a wider card with supporting text below as a natural lead-in to additional content.',
            imagen: '../../../assets/css.png'
        },
        {
            titulo: 'Javascript',
            descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            imagen: '../../../assets/javascript.svg'
        },
        {
            titulo: 'Bootstrap',
            descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            imagen: '../../../assets/bootstrap.svg'
        },
        {
            titulo: 'jQuery',
            descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            imagen: '../../../assets/jquery.png'
        },
        {
            titulo: 'Angular',
            descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            imagen: '../../../assets/angular.ico'
        },
        {
            titulo: 'React',
            descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            imagen: '../../../assets/react.png'
        },
        {
            titulo: 'Vue',
            descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            imagen: '../../../assets/vue.png'
        },
        {
            titulo: '.Net',
            descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            imagen: '../../../assets/puntoNet.png'
        }
    ];
    */


