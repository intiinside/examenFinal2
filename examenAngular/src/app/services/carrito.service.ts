import {Injectable} from "@angular/core";
import {PokemonInterface} from "../interfaces/pokemon.interface";

@Injectable()
export class CarritoService {
  static pokemonDelCarrito : Array<PokemonInterface>=[];
  constructor(){}
}
