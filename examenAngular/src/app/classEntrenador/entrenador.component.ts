import { Component, OnInit } from '@angular/core';
import {EntrenadorInterface} from "../interfaces/entrenador.interface";
import {PokemonInterface} from "../interfaces/pokemon.interface";
import {EntrenadorService} from "../services/entrenador.service";
import {PokemonService} from "../services/pokemon.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html',
  styleUrls: ['./entrenador.component.css'],
  providers: [PokemonService,EntrenadorService]
})
export class EntrenadorComponent implements OnInit {
  entrenador:EntrenadorInterface;
  pokemon:Array<PokemonInterface>;
  constructor(private pokemonService:PokemonService, private entrenadorService:EntrenadorService, private _router: Router){
  }
  ngOnInit() {
    this.entrenador=EntrenadorService.entrenadorSeleccionada;
    this.pokemon = this.entrenador.pokemon;
  }
    seleccionarPokemon(pokemon : PokemonInterface){

    PokemonService.pokemonSeleccionado=pokemon;
    const url = ['/pokemon'];
    this._router.navigate(url);
  }

}
