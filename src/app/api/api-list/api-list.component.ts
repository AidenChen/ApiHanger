import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Api } from '../../models';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {

  @Input() apis: Api[];
  @Output() apiClicked = new EventEmitter<number>();

  constructor () {
  }

  ngOnInit () {
  }

  onApiClick (id: number) {
    this.apiClicked.emit(id);
  }

}
