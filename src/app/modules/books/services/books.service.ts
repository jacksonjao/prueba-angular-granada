import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {BookModel} from '../../../shared/models/book';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BooksService {
  API = environment.API;
  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<BookModel[]> {
  return this.httpClient.get<BookModel[]>(this.API);
  }
}
