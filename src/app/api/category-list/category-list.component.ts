import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  @Input() categories: Category[];
  @Output() categoryClicked = new EventEmitter<number>();

  constructor () {
  }

  ngOnInit () {
  }

  onCategoryClick (id: number) {
    this.categoryClicked.emit(id);
  }

}
