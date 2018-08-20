import { Component, OnInit } from '@angular/core';
import {CarritoService} from "../services/carrito.service";
import {PokemonService} from "../services/pokemon.service";
import {PokemonInterface} from "../interfaces/pokemon.interface";
// @ts-ignore
import {UsuarioService} from "../servicios/usuario.service";

@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.component.html',
  styleUrls: ['./carritocompras.component.css'],
  providers: [CarritoService]
})
export class CarritocomprasComponent implements OnInit {
  compras;
  usuario;
  total=0;

  nombrefac:string;
  correofac: string;
  direccionfac:string;
  ingredientesComprados:Array<PokemonInterface>;
  // @ts-ignore
  constructor(private carritoService:CarritoService) { }
  // @ts-ignore
  constructor(private _compras: ComprasService, private _usuario: UsuarioService) { }

  ngOnInit() {
    this.ingredientesComprados=CarritoService.pokemonDelCarrito;

    this.cargarUsuario();


    this.nombrefac=this.usuario[0].nombre;
    this.correofac=this.usuario[0].correoElectronico;
    this.direccionfac=this.usuario[0].direccion;
  }


  cargarUsuario(){
    this.usuario=this._usuario.getUsuario();
  }

  esNulos(){
    if(
      this.nombrefac==null||
      this.direccionfac==null||
      this.correofac==null){
      return true;
    }else{
      return false;
    }
  }

  guardarInformacion(event, formData){
    // console.log(event);
    console.log(formData);
    this.nombrefac=formData.value.nombre;
    this.correofac=formData.value.correo;
    this.direccionfac=formData.value.direccion;
  }

}
