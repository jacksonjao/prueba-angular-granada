import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {DataHeaderService} from './services/data-header.service';
import { LoginComponent } from './auth/login/login.component';
import {AuthService} from './services/auth.service';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import {AuthGuard} from './guards/authentication/auth.guard';
import {BooksService} from './services/books.service';

@NgModule({
  declarations: [HeaderComponent, LoginComponent, RegisterComponent],
  exports: [
    HeaderComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    DataHeaderService,
    AuthService,
    AuthGuard,
    BooksService
  ]
})
export class CoreModule { }
