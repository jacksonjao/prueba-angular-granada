import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from './pages/books/books.component';

const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: BooksComponent,
  }
];

export const BOOKS_ROUTING = RouterModule.forChild(BOOKS_ROUTES);

