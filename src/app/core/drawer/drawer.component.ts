import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  id: number;
  @Output() navClicked = new EventEmitter<void>();

  constructor (private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit () {
    this.route.queryParams.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  handleClicked (e: Event) {
    e.preventDefault();
    this.navClicked.emit();
  }

  overview () {
    this.router.navigate(['dashboard/overview'], { queryParams: { id: this.id } });
  }

  api () {
    this.router.navigate(['dashboard/api'], { queryParams: { id: this.id } });
  }

}
