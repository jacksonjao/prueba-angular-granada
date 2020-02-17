import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './core/auth/login/login.component';
import {RegisterComponent} from './core/auth/register/register.component';
import {AuthGuard} from './core/guards/authentication/auth.guard';

const APP_ROUTES: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'book',
    loadChildren: './modules/books/books.module#BooksModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: './modules/user/user.module#UserModule',
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'register', component: RegisterComponent,
  }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

