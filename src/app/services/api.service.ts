import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Api } from '../models';

@Injectable()
export class ApiService {

  private readonly module = 'api';

  constructor (@Inject('CONFIG') private config,
               private http: HttpClient) {
  }

  index (request: { page_index: string, page_size: string, category_id: string }): Observable<Array<Api>> {
    const uri = `${this.config.api}/${this.module}`;
    return this.http.get<Array<Api>>(uri, { params: request })
      .map(response => response);
  }

}
