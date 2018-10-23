import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name;
  surname;
  email;
  username;
  password;
  confirmPassword;

  registering : boolean = false;
  log : boolean = false;
  info : boolean = false;
  logInfo : boolean = false;

  constructor(public navCtrl: NavController) {
  this.registering = true;
  this.log = true;
  }

  register(){
    this.registering = false;
   this.info = true;
  }
login(){
this.log = false;
 this.logInfo = true;
}

submit(){
  this.info = false;
  this.registering = true;
}

}
