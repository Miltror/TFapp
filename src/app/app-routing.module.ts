import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'tarjetas',
    loadChildren: () => import('./tarjetas/tarjetas.module').then( m => m.TarjetasPageModule)
  },
  {
    path: 'tarjetas',
    loadChildren: () => import('./tarjetas/tarjetas.module').then( m => m.TarjetasPageModule)
  },
  {
    path: 'numero-de-tarjeta',
    loadChildren: () => import('./numero-de-tarjeta/numero-de-tarjeta.module').then( m => m.NumeroDeTarjetaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
