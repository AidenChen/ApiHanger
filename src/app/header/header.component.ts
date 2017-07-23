import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../models/auth-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  auth: Auth;

  constructor(@Inject('auth') private service, private router: Router) { }

  ngOnInit() {
    this.service
      .getAuth()
      .subscribe(auth => this.auth = Object.assign({}, auth));
  }

  logout() {
    this.service.unAuth();
    this.auth = null;
    this.router.navigate(['login']);
  }

}
