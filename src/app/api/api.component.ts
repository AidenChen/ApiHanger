import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService, CategoryService, ApiService } from '../services';
import { Project, Category, Api } from '../models';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  id: string;
  projects: Array<Project>;
  categories: Array<Category>;
  items: Array<Api>;
  api: Api;

  constructor (private route: ActivatedRoute,
               private projectService: ProjectService,
               private categoryService: CategoryService,
               private apiService: ApiService) {
  }

  ngOnInit () {
    this.route.queryParamMap
      .subscribe(params => {
        this.id = params.get('id');
        this.indexProjects();
        this.indexCategories();
        this.items = [];
        this.api = null;
      });
  }

  indexProjects () {
    this.projectService
      .index({
        page_index: '1',
        page_size: '5000'
      })
      .subscribe(projects => this.projects = projects);
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

  indexApi (id) {
    this.apiService
      .index({
        page_index: '1',
        page_size: '5000',
        category_id: id
      })
      .subscribe(items => this.items = items);
  }

  showApi (id) {
    this.apiService
      .show({
        id: id
      })
      .subscribe(api => this.api = api);
  }

}
