import { Component, OnInit, AfterContentChecked, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Api, Parameter } from '../../models';

@Component({
  selector: 'app-api-detail',
  templateUrl: './api-detail.component.html',
  styleUrls: ['./api-detail.component.scss']
})
export class ApiDetailComponent implements OnInit, AfterContentChecked {

  @Input() api: Api;
  displayedColumns = ['key', 'type', 'not_null', 'default', 'description'];
  dataSource = new MatTableDataSource<Parameter>();

  constructor () {
  }

  ngOnInit () {
  }

  ngAfterContentChecked () {
    if (this.api) {
      this.dataSource = new MatTableDataSource(this.api.request_parameter);
    }
  }

}
