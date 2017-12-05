import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  id: string;
  @Output() navClicked = new EventEmitter<void>();

  constructor (private route: ActivatedRoute) {
  }

  ngOnInit () {
    this.route.queryParamMap
      .subscribe(params => {
        this.id = params.get('id');
      });
  }

  onClick (event: Event) {
    event.preventDefault();
    this.navClicked.emit();
  }

}
