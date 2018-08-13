import {PokemonInterface} from "./pokemon.interface";

export interface EntrenadorInterface {
  nombreEntrenador: string;
  apellidoEntrenador:string;
  fechaNacimiento:string;
  numeroMedallas:number;
  campeonActual:boolean;
  imagenUrl:string;
  pokemon : PokemonInterface[];


}
