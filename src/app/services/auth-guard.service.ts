import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Router,
  Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor (private router: Router,
               private authService: AuthService) {
  }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url;

    return this.authService.getAuth()
      .map(auth => ! auth.hasError);
  }

  canLoad (route: Route): Observable<boolean> {
    const url = `/${route.path}`;

    return this.authService.getAuth()
      .map(auth => ! auth.hasError);
  }

}
