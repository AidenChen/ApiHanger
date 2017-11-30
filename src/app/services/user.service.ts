import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models';

@Injectable()
export class UserService {

  private readonly module = 'users';

  constructor (@Inject('CONFIG') private config,
               private http: HttpClient) {
  }

  getUser (userId: number): Observable<User> {
    const uri = `${this.config.api}/${this.module}/${userId}`;
    return this.http.get(uri)
      .map(res => res as User);
  }

  findUser (username: string): Observable<User> {
    const uri = `${this.config.api}/${this.module}/?username=${username}`;
    return this.http.get(uri)
      .map(res => {
        const users = res as User[];
        return (users.length > 0) ? users[0] : null;
      });
  }

}
