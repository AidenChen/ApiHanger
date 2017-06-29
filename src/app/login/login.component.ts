import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from '../models/auth-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  auth: Auth;

  constructor(@Inject('auth') private service, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.service
      .loginWithCredentials(this.username, this.password)
      .subscribe(auth => {
        this.auth = Object.assign({}, auth);
        if (!auth.hasError) {
          this.router.navigate(['project']);
        }
      });
  }

}
