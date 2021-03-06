import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services';
import { Auth } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  auth: Auth;

  constructor (private authService: AuthService) {
  }

  ngOnInit () {
    this.authService
      .getAuth()
      .subscribe(auth => this.auth = Object.assign({}, auth));
  }

}
