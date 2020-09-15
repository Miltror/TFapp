import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router, private navCrtl:NavController) {}
  
  GoToHistorial(){
    this.route.navigate([ 'historial'])
  }
  GoToTarjetas(){
    this.route.navigate([ 'tarjetas'])
  }

}
