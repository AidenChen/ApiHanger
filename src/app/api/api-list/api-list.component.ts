import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services';
import { Api, Category } from '../../models';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {

  @Input() categories: Array<Category>;
  items: Array<Api>;

  constructor (private apiService: ApiService) {
  }

  ngOnInit () {
  }

  indexApi (id) {
    this.apiService
      .index({
        page_index: '1',
        page_size: '5000',
        category_id: id
      })
      .subscribe(items => this.items = items);
  }

}
