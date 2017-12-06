import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../services';
import { Project } from '../models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Project[];

  constructor (private router: Router,
               private projectService: ProjectService) {
  }

  ngOnInit () {
    this.indexProjects();
  }

  indexProjects () {
    this.projectService
      .index({
        page_index: '1',
        page_size: '5000'
      })
      .subscribe(projects => this.projects = projects);
  }

  onClick (id: number) {
    this.router.navigate(['dashboard/overview'], { queryParams: { id: id } });
  }

}
