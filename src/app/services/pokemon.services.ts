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
        },
        {
            Tomcat es un servidor web desarrollado también por la Apache Software Foundation, por lo que su nombre oficial
            es Apache Tomcat. También es un servidor HTTP, sin embargo, está hecho para aplicaciones Java en lugar de sitios
            web estáticos. Tomcat puede ejecutar varias especificaciones diferentes de Java, como Java Servlet, JavaServe
            Pages (JSP), Java EL y WebSocket.
        },
        {
            Nginx, pronunciado como Engine-X, es una aplicación de servidor web más reciente lanzada por primera vez en el 2004.
            Nginx fue creado para resolver el denominado problema c10k, lo que significa que un servidor web que utiliza subprocesos
            para manejar las solicitudes de los usuarios no puede administrar más de 10,000 conexiones al mismo tiempo.

            Dado que Apache utiliza la estructura basada en subprocesos, los propietarios de sitios web con mucho tráfico
            pueden tener problemas de rendimiento. Nginx es uno de los servidores web que abordan el problema c10k y
            probablemente el más exitoso.
            Nginx tiene una arquitectura guiada por los eventos que no crea un nuevo proceso para cada solicitud. En
            cambio, maneja todas las solicitudes entrantes en un solo proceso
        },
        {
            Apache HTTP Server es un software de servidor web gratuito y de código abierto para plataformas Unix con el cual se
            ejecutan el 46% de los sitios web de todo el mundo. Es mantenido y desarrollado por la Apache Software Foundation.
        },
        {
            Progressive web apps (o aplicaciones web progresivas), es un término que se da a una nueva generación de aplicaciones
            que incrementan su funcionalidad, conforme las capacidades del dispositivo en el que se ejecutan, incrementan, de ahí
            la palabra progresiva. La siguiente parte del nombre web, hace referencia a que se construyen utilizando estándares
            de desarrollo web, algunos ya conocidos como HTML, CSS y javaScript; y una nueva generación de APIs de javaScript.
            La parte final app es porque las Progressive Web Apps se comportan como aplicaciones web nativas, pero usan
            tecnologías web.
        }
    ];
    */


