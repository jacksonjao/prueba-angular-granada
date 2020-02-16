import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'book',
    loadChildren: './modules/books/books.module#BooksModule',
  }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

