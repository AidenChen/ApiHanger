import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category, Api } from '../../models';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {

  @Input() categories: Array<Category>;
  @Input() items: Array<Api>;
  @Output() categoryClicked = new EventEmitter<number>();
  @Output() itemClicked = new EventEmitter<number>();

  constructor () {
  }

  ngOnInit () {
  }

  onCategoryClick (id: number) {
    this.categoryClicked.emit(id);
  }

  onItemClick (id: number) {
    this.itemClicked.emit(id);
  }

}
