import { Component, OnInit } from '@angular/core';
import {BookModel} from '../../../../shared/models/book.model';
import {Router} from '@angular/router';
import {DataHeaderService} from '../../../../core/services/data-header.service';
import {BooksService} from '../../../../core/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: BookModel[];
  constructor(private service: BooksService, private router: Router, private serviceHeader: DataHeaderService) {
    this.books = [];
    this.serviceHeader.setdata({id: 'feed', data: null});
    for (let i = 0; i < 100; i++) {
      this.books.push(new BookModel());
    }
  }

  ngOnInit() {
    this.service.getBooks().subscribe(response => {
      this.books = response;
    });
  }

  selectedBook(event: number) {
    this.router.navigate(['book', event]);
  }
}
