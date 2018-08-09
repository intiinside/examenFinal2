import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EntrenadorInterface} from "../interfaces/entrenador.interface";
import {PokemonService} from "./pokemon.service";

@Injectable()
export class EntrenadorService {
  public static entrenadorSeleccionada:EntrenadorInterface;
  constructor(private http: HttpClient) {
  }

  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }

  obtenerEntrenador() {
    return this.http.get("http://localhost:1337/classEntrenador", {headers: EntrenadorService.getCommonHeaders()});
  }
  buscarEntrenador(parametro){
    let header = PokemonService.getCommonHeaders();
    return this.http.get('http://localhost:1337/classEntrenador?where={"nombreEntrenador":{"contains":"' + parametro+ '"}}'
      ,{headers: header});
  }
}
