import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { Auth } from '../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  auth: Auth;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService
      .getAuth()
      .subscribe(auth => this.auth = Object.assign({}, auth));
  }

  logout() {
    this.authService.unAuth();
    this.auth = null;
    this.router.navigate(['login']);
  }

}
