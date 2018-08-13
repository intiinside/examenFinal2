import {HomeComponent} from "./home/home.component";
import {Routes} from "@angular/router";
import {EntrenadorComponent} from "./entrenador/entrenador.component";
import {CarritocomprasComponent} from "./carritocompras/carritocompras.component";
import {PokemonComponent} from "./pokemon/pokemon.component";


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent },
  {
    path: 'pokemon',
    component: PokemonComponent },
  {
    path: 'entrenador',
    component: EntrenadorComponent,
    children: [{
      path: 'pokemon',
      component: PokemonComponent
    }]
  },
  {
    path: 'carrito',
    component: CarritocomprasComponent}
];
