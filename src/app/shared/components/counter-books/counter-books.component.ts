import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter-books',
  templateUrl: './counter-books.component.html',
  styleUrls: ['./counter-books.component.css']
})
export class CounterBooksComponent implements OnInit {
  @Input()counter: number;
  @Input()title: string;
  constructor() { }

  ngOnInit() {
  }

}
