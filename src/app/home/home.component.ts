import { Component, OnInit, Inject } from '@angular/core';
import { Auth } from '../models/auth-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  auth: Auth;

  constructor(@Inject('auth') private service) { }

  ngOnInit() {
    this.service
      .getAuth()
      .subscribe(auth => this.auth = Object.assign({}, auth));
  }

}
