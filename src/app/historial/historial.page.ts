import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage{

  constructor(private route: Router, private navCrtl:NavController) {}
  
  GoToHome(){
    this.route.navigate([ 'home'])
  }
  GoToTarjetas(){
    this.route.navigate([ 'tarjetas'])
  }

}
