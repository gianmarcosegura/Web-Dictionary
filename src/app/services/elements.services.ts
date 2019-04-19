import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ElementsService {

    public url: string;

    constructor( public http: HttpClient ) {
        
        this.url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150';
        console.log('Servicio listo');
    
    }


    getPokemons(): Observable<any> {
        return this.http.get(this.url);
    }

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


