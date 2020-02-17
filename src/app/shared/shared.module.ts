import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookComponent} from './components/book/book.component';
import {CounterBooksComponent} from './components/counter-books/counter-books.component';

@NgModule({
  declarations: [BookComponent, CounterBooksComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BookComponent,
    CounterBooksComponent
  ]
})
export class SharedModule { }
