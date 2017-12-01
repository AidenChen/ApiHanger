import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor (private authService: AuthService, private router: Router) {
  }

  ngOnInit () {
  }

  onSubmit () {
    this.authService
      .login({ username: this.username, password: this.password })
      .subscribe(auth => {
        if (auth.success) {
          this.router.navigate(['project']);
        }
      });
  }

}
