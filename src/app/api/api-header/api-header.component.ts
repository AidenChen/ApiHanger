import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models';

@Component({
  selector: 'app-api-header',
  templateUrl: './api-header.component.html',
  styleUrls: ['./api-header.component.scss']
})
export class ApiHeaderComponent implements OnInit {

  @Input() current: string;
  @Input() projects: Project[];

  constructor (private router: Router) {
  }

  ngOnInit () {
  }

  onChange (event: any) {
    this.router.navigate(['dashboard/api'], { queryParams: { id: event.value } });
  }

}
