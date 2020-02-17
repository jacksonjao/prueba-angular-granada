import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './pages/user/user.component';
import {NewBookComponent} from './pages/new-book/new-book.component';
import {MyBooksComponent} from './pages/my-books/my-books.component';
import {EditBookComponent} from './pages/edit-book/edit-book.component';

const USER_ROUTES: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'books',
        component: MyBooksComponent,
      },
    ]
  },
  {
    path: 'books/:id',
    component: EditBookComponent,
  },
  {
    path: 'create',
    component: NewBookComponent,
  }
];

export const USER_ROUTING = RouterModule.forChild(USER_ROUTES);

