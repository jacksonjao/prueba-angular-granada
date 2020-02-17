import {BookModel} from './book.model';

export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  isAuth: boolean;
  password: string;
  books: BookModel[];
}
