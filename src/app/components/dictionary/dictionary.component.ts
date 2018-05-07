import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../services/elements.services';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})

export class DictionaryComponent implements OnInit {

  diccionario: any[] = [];
  textoBuscar: string;
  ejemplo: number;

  constructor( private _servicioDictionary: ElementsService ) {  }

  ngOnInit() {

    this.ejemplo = 0;
    this.diccionario = this._servicioDictionary.getElementos();

  }

  imprime() {

    this.textoBuscar = (event.target as HTMLInputElement).value.toLowerCase();

    if (!this.textoBuscar) {
      this.textoBuscar = null;
      document.getElementById('encontrado').style.display = 'none';
    } else if (this.textoBuscar) {
      document.getElementById('encontrado').style.display = 'block';
    }

    !this.textoBuscar ? this.textoBuscar = null : console.log('');

    setTimeout(() => {
      this.ejemplo = document.getElementById('content').childElementCount;
    }, 0);

  }

}
