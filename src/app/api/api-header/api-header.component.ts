import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models';

@Component({
  selector: 'app-api-header',
  templateUrl: './api-header.component.html',
  styleUrls: ['./api-header.component.scss']
})
export class ApiHeaderComponent implements OnInit {

  @Input() current: string;
  @Input() projects: Array<Project>;

  constructor () {
  }

  ngOnInit () {
  }

}
