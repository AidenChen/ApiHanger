import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Category } from '../models';

@Injectable()
export class CategoryService {

  private readonly module = 'categories';

  constructor (@Inject('CONFIG') private config,
               private http: HttpClient) {
  }

  index (request: { page_index: string, page_size: string, project_id: string }): Observable<Category[]> {
    const uri = `${this.config.api}/${this.module}`;
    return this.http.get<Category[]>(uri, { params: request }).pipe(
      map(response => response)
    );
  }

}
