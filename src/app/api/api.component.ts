import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from '../services';
import { Category } from '../models';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  id: string;
  categories: Array<Category>;

  constructor (private route: ActivatedRoute,
               private categoryService: CategoryService) {
  }

  ngOnInit () {
    this.route.queryParams.forEach((params: Params) => {
      this.id = params['id'].toString();
      this.indexCategories();
    });
  }

  indexCategories () {
    this.categoryService
      .index({
        page_index: '1',
        page_size: '5000',
        project_id: this.id
      })
      .subscribe(categories => this.categories = categories);
  }

}
