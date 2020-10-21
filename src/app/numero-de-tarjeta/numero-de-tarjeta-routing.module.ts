import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumeroDeTarjetaPage } from './numero-de-tarjeta.page';

const routes: Routes = [
  {
    path: '',
    component: NumeroDeTarjetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumeroDeTarjetaPageRoutingModule {}
