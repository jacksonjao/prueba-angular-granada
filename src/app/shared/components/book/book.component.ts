import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookModel} from '../../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: BookModel;
  @Output() selectedBook = new EventEmitter();
  img = 'https://picsum.photos/200/300/?image=';
  loading = true;
  constructor() {
  }

  ngOnInit() {
  }

  onLoad() {
    this.loading = false;
  }
}
