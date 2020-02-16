import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSearchActive: boolean;
  constructor() { }

  ngOnInit() {
  }

  search () {
    this.isSearchActive = !this.isSearchActive;
  }

}
