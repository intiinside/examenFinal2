import { Component, OnInit } from '@angular/core';
import {EntrenadorInterface} from "../interfaces/entrenador.interface";

import {EntrenadorService} from "../services/entrenador.service";
import {PokemonService} from "../services/pokemon.service";
import {PokemonInterface} from "../interfaces/pokemon.interface";
import {CarritoService} from "../services/carrito.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  providers : [EntrenadorService,PokemonService,CarritoService],
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  entrenador:EntrenadorInterface;
  pokemon:PokemonInterface;
  constructor(private entrenadorService:EntrenadorService, private pokemonService:PokemonService, private carritoService:CarritoService, private _router: Router
  ) { }

  ngOnInit() {
    this.entrenador=EntrenadorService.entrenadorSeleccionada;
    this.pokemon=PokemonService.pokemonSeleccionado;
  }

  agregarAlCarrito(pokemon : PokemonInterface){

    CarritoService.pokemonDelCarrito.push(pokemon);
    const url = ['/'];
    this._router.navigate(url);
  }

}
