import {HomeComponent} from "./home/home.component";
import {Routes} from "@angular/router";
import {ComidaComponent} from "./classEntrenador/entrenador.component";
import {CarritocomprasComponent} from "./carritocompras/carritocompras.component";
import {PokemonComponent} from "./classPokemon/pokemon.component";


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent },
  {
    path: 'pokemon',
    component: PokemonComponent },
  {
    path: 'comida',
    component: ComidaComponent,
    children: [{
      path: 'pokemon',
      component: PokemonComponent
    }]
  },
  {
    path: 'carrito',
    component: CarritocomprasComponent}
];
