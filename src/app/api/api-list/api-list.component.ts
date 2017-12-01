import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../models';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {

  @Input() categories: Array<Category>;

  constructor () {
  }

  ngOnInit () {
  }

}
