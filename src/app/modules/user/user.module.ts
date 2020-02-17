import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './pages/user/user.component';
import {USER_ROUTING} from './user.routes';
import {SharedModule} from '../../shared/shared.module';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { FormEditOrCreateBookComponent } from './components/form-edit-or-create-book/form-edit-or-create-book.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MyBooksComponent } from './pages/my-books/my-books.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';

@NgModule({
  declarations: [UserComponent, NewBookComponent, FormEditOrCreateBookComponent, MyBooksComponent, EditBookComponent],
  imports: [
    CommonModule,
    USER_ROUTING,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
