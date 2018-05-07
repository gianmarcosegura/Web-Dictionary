import { Injectable } from '@angular/core';

@Injectable()
export class ElementsService {

    constructor() {
        console.log('Servicio listo');
    }

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

    getElementos() {
        return this.elementos;
    }

}
