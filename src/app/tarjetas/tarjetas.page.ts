import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.page.html',
  styleUrls: ['./tarjetas.page.scss'],
})
export class TarjetasPage{

  constructor(private route: Router, private navCrtl:NavController) {}
  
  GoToHistorial(){
    this.route.navigate([ 'historial'])
  }
  GoToHome(){
    this.route.navigate([ 'home'])
  }
  GoToNumeroTarejeta(){
    this.route.navigate( [ 'numero-de-tarjeta'])
  }
  
 
  }


