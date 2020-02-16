import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookModel} from '../../../../shared/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: BookModel;
  @Output() selectedBook = new EventEmitter();
  IMAGE_PATH = 'https://picsum.photos/200/300/?image=';
  constructor() {
  }

  ngOnInit() {
  }

}
