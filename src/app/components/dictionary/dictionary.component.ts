import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.services';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})

export class DictionaryComponent implements OnInit {

  pokemons: Pokemon;
  prueba: any;
  pokemonBuscar: string;
  ejemplo: number;
  image: string;

  constructor( public _http: PokemonService ) {  }

  ngOnInit() {

    this.ejemplo = 0;

  }

  // pokemonGo() {
  //   this._http.getPokemons()
  //   .subscribe((data) => {
  //     this.pokemons = data;
  //   })
  // }

  // FIXME: buscar url de cada pokemn
  // FIXME: Igual ancho del hr con la cabecera del componente dictionary

  goSearch(param: string) {

    this._http.getPokemonByName(param)
      .subscribe(data => {
        this.pokemons = data;
      });
 

    // console.log(param);

    // this.pokemonBuscar = (event.target as HTMLInputElement).value.toLowerCase();

    // for (let i in this.pokemons.results) {
    //   if(this.pokemons.results[i].name.includes(this.pokemonBuscar)) {
    //     console.log(this.pokemons.results[i].url)
    //     this._http.getImage(this.pokemons.results[i].url)
    //       .subscribe((data)=>{
    //         console.log(data);
    //         this.image = data.sprites.front_default;
    //       })
    //   }
    // }

  }



    /*

    this.pokemonBuscar = (event.target as HTMLInputElement).value.toLowerCase();

    if (!this.pokemonBuscar) {
      this.pokemonBuscar = null;
      document.getElementById('encontrado').style.display = 'none';
    } else if (this.pokemonBuscar) {
      document.getElementById('encontrado').style.display = 'block';
    }

    !this.pokemonBuscar ? this.pokemonBuscar = null : console.log('');

    setTimeout(() => {
      this.ejemplo = document.getElementById('content').childElementCount;
    }, 0);
    */
  }

  interface Pokemon {
    "count": string,
    "next": string,
    "previous": string,
    "results": any
  }