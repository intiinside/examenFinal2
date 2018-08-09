import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PokemonInterface} from "../interfaces/pokemon.interface";

@Injectable()
export class PokemonService {
  static pokemonSeleccionado:PokemonInterface;
  constructor(private http:HttpClient){
  }
  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }
  obtenerPokemon(){
    return this.http.get("http://localhost:1337/pokemon",{headers:PokemonService.getCommonHeaders()});
  }
  buscarPokemon(parametro){
    let header = PokemonService.getCommonHeaders();
    return this.http.get('http://localhost:1337/pokemon?where={"nombrePokemon":{"contains":"' + parametro+ '"}}'
      ,{headers: header});
  }
}
