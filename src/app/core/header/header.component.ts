import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services';
import { Auth } from '../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  id: string;
  auth: Auth;
  @Output() toggle = new EventEmitter<void>();

  constructor (private router: Router,
               private route: ActivatedRoute,
               private authService: AuthService) {
  }

  ngOnInit () {
    this.route.queryParamMap
      .subscribe(params => {
        this.id = params.get('id');
      });
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
