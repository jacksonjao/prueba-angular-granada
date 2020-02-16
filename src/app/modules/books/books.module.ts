import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './pages/books/books.component';
import {BOOKS_ROUTING} from './dashboard.routes';
import { BookComponent } from './components/book/book.component';
import {BooksService} from './services/books.service';

@NgModule({
  declarations: [BooksComponent, BookComponent],
  imports: [
    CommonModule,
    BOOKS_ROUTING
  ],
  providers: [
    BooksService
  ]
})
export class BooksModule { }
