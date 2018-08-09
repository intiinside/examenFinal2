import { Component, OnInit } from '@angular/core';
import {ComidaInterface} from "../interfaces/comida.interface";
import {ComidaService} from "../services/comida.service";
import {IngredienteService} from "../services/ingrediente.service";
import {IngredienteInterface} from "../interfaces/ingrediente.interface";
import {CarritoService} from "../services/carrito.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ingrediente',
  templateUrl: './pokemon.component.html',
  providers : [ComidaService,IngredienteService,CarritoService],
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  comida:ComidaInterface;
  pokemon:IngredienteInterface;
  constructor(private comidaService:ComidaService, private ingredienteService:IngredienteService,private carritoService:CarritoService,private _router: Router
  ) { }

  ngOnInit() {
    this.comida=ComidaService.comidaSeleccionada;
    this.pokemon=IngredienteService.ingredienteSeleccionado;
  }
  agregarAlCarrito(ingrediente:IngredienteInterface){
    CarritoService.ingredientesDelCarrito.push(ingrediente);
    const url = ['/'];
    this._router.navigate(url);
  }

}
