import { Component, OnInit, Input } from '@angular/core';
import { Api } from '../../models';

@Component({
  selector: 'app-api-detail',
  templateUrl: './api-detail.component.html',
  styleUrls: ['./api-detail.component.scss']
})
export class ApiDetailComponent implements OnInit {

  @Input() api: Api;

  constructor () {
  }

  ngOnInit () {
  }

}
