import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from './pages/books/books.component';
import {BookInformationComponent} from './pages/book-information/book-information.component';

const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {path: ':id', component: BookInformationComponent}

];

export const BOOKS_ROUTING = RouterModule.forChild(BOOKS_ROUTES);

