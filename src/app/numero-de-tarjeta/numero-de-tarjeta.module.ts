import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumeroDeTarjetaPageRoutingModule } from './numero-de-tarjeta-routing.module';

import { NumeroDeTarjetaPage } from './numero-de-tarjeta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumeroDeTarjetaPageRoutingModule
  ],
  declarations: [NumeroDeTarjetaPage]
})
export class NumeroDeTarjetaPageModule {}
