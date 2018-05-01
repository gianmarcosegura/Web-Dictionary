import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../../services/elements.services';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  botonText: string;
  diccionario: any[] = [];

  constructor( private _servicioDictionary: ElementsService ) {

   }

  ngOnInit() {

    this.diccionario = this._servicioDictionary.getElementos();
    this.botonText = 'Info';

  }

}
