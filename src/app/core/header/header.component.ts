import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  @Output() toggle = new EventEmitter<void>();

  constructor (private router: Router,
               private authService: AuthService) {
  }

  ngOnInit () {
    this.authService
      .getAuth()
      .subscribe(auth => this.auth = Object.assign({}, auth));
  }

  onClick () {
    this.toggle.emit();
  }

  logout () {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
