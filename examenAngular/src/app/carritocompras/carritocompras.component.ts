import { Component, OnInit } from '@angular/core';
import {CarritoService} from "../services/carrito.service";
import {PokemonService} from "../services/pokemon.service";
import {PokemonInterface} from "../interfaces/pokemon.interface";

@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.component.html',
  styleUrls: ['./carritocompras.component.css'],
  providers: [CarritoService]
})
export class CarritocomprasComponent implements OnInit {
  ingredientesComprados:Array<PokemonInterface>;
  constructor(private carritoService:CarritoService) { }

  ngOnInit() {
    this.ingredientesComprados=CarritoService.pokemonDelCarrito;
  }

}
