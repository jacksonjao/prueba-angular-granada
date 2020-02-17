import { Component, OnInit } from '@angular/core';
import {BookModel} from '../../../../shared/models/book.model';
import {BooksService} from '../../../../core/services/books.service';
import {take} from 'rxjs/operators';
import {AuthService} from '../../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  books: BookModel[]
  constructor(private booksService: BooksService, private authService: AuthService, private router: Router) {
    this.books=[];
    for (let i = 0; i < 100; i++) {
      this.books.push(new BookModel());
    }
  }

  editBook(book: BookModel) {
    this.router.navigate(['user/books', 1], {state: {data: 'mi data'}})
    console.log(book);
  }

  ngOnInit() {
    this.authService.getUserLogged().pipe(take(1)).subscribe(user => {
      this.books = this.booksService.getAllBooksByUser(user.id);
      console.log(this.books);
    });

  }

}
