import { Component, OnInit } from '@angular/core';
import {BooksService} from '../../services/books.service';
import {BookModel} from '../../../../shared/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: BookModel[];
  constructor(private service: BooksService) { }

  ngOnInit() {
    this.service.getBooks().subscribe(response => {
      this.books = response;
    });
  }

  selectedBook(event) {
    console.log(event);
  }
}
