import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _usuario=[];

  constructor() {
    this._usuario = [
      {
        id:10,
        nickname: 'intiinside',
        nombre: 'Inti Poaquiza',
        correoElectronico: 'inti.poaquiza@epn.edu.ec',
        imagen: 'https://image.freepik.com/iconos-gratis/la-imagen-del-usuario-con-el-fondo-negro_318-34564.jpg',
        direccion: 'El doradp'
      }];
  }

  public getUsuario(){
    return this._usuario;
  }
}
