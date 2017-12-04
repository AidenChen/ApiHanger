import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models';

@Injectable()
export class ProjectService {

  private readonly module = 'projects';

  constructor (@Inject('CONFIG') private config,
               private http: HttpClient) {
  }

  index (request: { page_index: string, page_size: string }): Observable<Array<Project>> {
    const uri = `${this.config.api}/${this.module}`;
    return this.http.get<Array<Project>>(uri, { params: request })
      .map(response => response);
  }

}
