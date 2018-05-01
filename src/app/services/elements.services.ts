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
            titulo: 'HTML5',
            descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            imagen: '../../../assets/html.png'
        },
        {
            titulo: 'HTML5',
            descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            imagen: '../../../assets/html.png'
        },
        {
            titulo: 'HTML5',
            descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            imagen: '../../../assets/html.png'
        },
        {
            titulo: 'HTML5',
            descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            imagen: '../../../assets/html.png'
        },
        {
            titulo: 'HTML5',
            descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            imagen: '../../../assets/html.png'
        },
        {
            titulo: 'HTML5',
            descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            imagen: '../../../assets/html.png'
        },
        {
            titulo: 'HTML5',
            descripcion: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
            imagen: '../../../assets/html.png'
        }
    ];

    getElementos() {
        return this.elementos;
    }

}
