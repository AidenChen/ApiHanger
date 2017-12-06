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
  requestParameterColumns = ['key', 'type', 'not_null', 'default', 'description'];
  responseParameterColumns = ['key', 'type', 'description'];
  requestParameter = new MatTableDataSource<Parameter>();
  responseParameter = new MatTableDataSource<Parameter>();

  constructor () {
  }

  ngOnInit () {
  }

  ngAfterContentChecked () {
    if (this.api) {
      this.requestParameter = new MatTableDataSource(this.api.request_parameter);
      this.responseParameter = new MatTableDataSource(this.api.response_parameter);
    }
  }

}
