import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './pages/books/books.component';
import {BOOKS_ROUTING} from './books.routes';
import { BookInformationComponent } from './pages/book-information/book-information.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [BooksComponent, BookInformationComponent],
  imports: [
    CommonModule,
    BOOKS_ROUTING,
    RouterModule,
    SharedModule
  ],
  providers: [
  ]
})
export class BooksModule { }
