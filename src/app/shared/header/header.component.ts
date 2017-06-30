import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from '../../models/auth-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  id: number;
  auth: Auth;

  constructor(@Inject('auth') private service, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.service
      .getAuth()
      .subscribe(auth => this.auth = Object.assign({}, auth));
    this.route.queryParams.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  home() {
    this.router.navigate(['home']);
  }

  project() {
    this.router.navigate(['project']);
  }

  overview() {
    this.router.navigate(['dashboard/overview'], {queryParams: {id: this.id}});
  }

  api() {
    this.router.navigate(['dashboard/api'], {queryParams: {id: this.id}});
  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    this.service.unAuth();
    this.auth = null;
    this.router.navigate(['login']);
  }

}
