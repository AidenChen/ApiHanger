import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services';
import { Category } from '../models';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  categories: Array<Category>;

  constructor (private categoryService: CategoryService) {
  }

  ngOnInit () {
    this.indexCategories();
  }

  indexCategories() {
    this.categoryService
      .index({
        page_index: '1',
        page_size: '5000'
      })
      .subscribe(categories => this.categories = categories);
  }

}
