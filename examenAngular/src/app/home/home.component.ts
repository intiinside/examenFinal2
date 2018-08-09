import { Component, OnInit } from '@angular/core';
import {EntrenadorInterface} from "../interfaces/entrenador.interface";
import {EntrenadorService} from "../services/entrenador.service";
import {PokemonInterface} from "../interfaces/pokemon.interface";
import {PokemonService} from "../services/pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PokemonService,EntrenadorService]
})
export class HomeComponent implements OnInit {
  pokemon:Array<PokemonInterface>;
  entrenador:Array<EntrenadorInterface>;
  datoABuscar;
  constructor(private pokemonService:PokemonService, private entrenadorService:EntrenadorService, private _router: Router){
  }
  ngOnInit(){
    this.pokemonService.obtenerPokemon()
      .subscribe(
        (result:any)=>{
          this.pokemon = result;
        }
      );
    this.entrenadorService.obtenerEntrenador()
      .subscribe(
        (result:any)=>{
          this.entrenador=result;
        }
      );
  }
  cargarDatosbusqueda() {
    this.pokemonService.buscarPokemon(this.datoABuscar).subscribe(
      (result: any[]) => {
        this.pokemon = result;
      }
    );
    this.entrenadorService.buscarEntrenador(this.datoABuscar).subscribe(
      (result: any[]) => {
        this.entrenador = result;
      }
    );
  }
  seleccionarEntrenador(entrenador:EntrenadorInterface){
    console.log(entrenador);
    EntrenadorService.entrenadorSeleccionada=entrenador;
    const url = ['/classEntrenador'];
    this._router.navigate(url);
  }
}
