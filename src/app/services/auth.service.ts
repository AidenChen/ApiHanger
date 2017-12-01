import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserService } from './user.service';
import { LocalStorageService } from './local-storage.service';
import { User, Auth, Response } from '../models';

@Injectable()
export class AuthService {

  private readonly module = 'v1/auth';
  auth: Auth = this.localStorageService.get('auth', {
    user: null,
    success: false,
    token: '',
    redirect: ''
  });
  subject: BehaviorSubject<Auth> = new BehaviorSubject<Auth>(this.auth);

  constructor (@Inject('CONFIG') private config,
               private http: HttpClient,
               private userService: UserService,
               private localStorageService: LocalStorageService) {
    this.subject.next(this.auth);
  }

  getAuth (): Observable<Auth> {
    return this.subject.asObservable();
  }

  getAuthorizationToken (): string {
    return this.auth.token;
  }

  logout (): void {
    this.auth = Object.assign(
      {},
      this.auth,
      { user: null, success: false, token: '', redirect: '' }
    );
    this.localStorageService.update('auth', this.auth);
    this.subject.next(this.auth);
  }

  login (request: {username: string, password: string}): Observable<Auth> {
    const uri = `${this.config.api}/users`;
    return this.http.get<any>(uri, {params: request})
      .map(response => {
        const auth = Object.assign({}, this.auth);
        if (! response.length) {
          auth.user = null;
          auth.success = false;
          auth.token = '';
        } else {
          auth.user = response[0];
          auth.success = true;
          auth.token = 'test';
        }
        this.auth = auth;
        this.localStorageService.update('auth', this.auth);
        this.subject.next(this.auth);
        return this.auth;
      });
  }

}
