import { Component, OnInit } from '@angular/core';
import {DataHeaderService} from '../services/data-header.service';
import {DataHeaderModel} from '../../shared/models/data-header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSearchActive: boolean;
  dataHeader: DataHeaderModel;
  constructor(private serviceHeader: DataHeaderService) {
    this.dataHeader = {id: '', data: null};
  }

  ngOnInit() {
    this.serviceHeader.getData().subscribe(data => {
      this.dataHeader = data;
    });
  }

  search () {
    this.isSearchActive = !this.isSearchActive;
  }

}
