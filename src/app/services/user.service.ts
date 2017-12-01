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

}
