import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {

  category = [
    '测试分类1',
    '测试分类2',
    '测试分类3',
    '测试分类4',
  ];

  constructor () {
  }

  ngOnInit () {
  }

}
