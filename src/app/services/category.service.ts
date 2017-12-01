import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Category } from '../models';

@Injectable()
export class CategoryService {

  private readonly module = 'categories';

  constructor (@Inject('CONFIG') private config,
               private http: HttpClient) {
  }

  index (request: { page_index: string, page_size: string }): Observable<Array<Category>> {
    const uri = `${this.config.api}/${this.module}`;
    return this.http.get<Array<Category>>(uri, { params: request })
      .map(response => response);
  }

}
