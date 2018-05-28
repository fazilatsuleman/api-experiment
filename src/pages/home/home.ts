import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import { AdduserPage } from '../adduser/adduser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getUsers();
  }

  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }
  adduser(){
    this.navCtrl.push(AdduserPage);
  }
}
