import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Api } from '../models';

@Injectable()
export class ApiService {

  private readonly module = 'apis';

  constructor (@Inject('CONFIG') private config,
               private http: HttpClient) {
  }

  index (request: { page_index: string, page_size: string, category_id: string }): Observable<Api[]> {
    const uri = `${this.config.api}/${this.module}`;
    return this.http.get<Api[]>(uri, { params: request }).pipe(
      map(response => response)
    );
  }

  show (request: { id: string }): Observable<Api> {
    const uri = `${this.config.api}/${this.module}/${request.id}`;
    return this.http.get<Api>(uri).pipe(
      map(response => response)
    );
  }

}
