import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BookModel} from '../../shared/models/book.model';

@Injectable()
export class BooksService {
  API = environment.API;
  dataBase = localStorage;
  bookSaved = new BehaviorSubject<BookModel>(null);
  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<BookModel[]> {
    return this.httpClient.get<BookModel[]>(this.API);
  }

  getBookById(id: number): Observable<BookModel> {
    return this.httpClient.get<BookModel>(`${this.API}/${id}`);
  }

  getBookByUser(userId: number, idBook: number): BookModel {
    return this.getDataFromDB(`books/${userId}/${idBook}`);
  }

  saveBook(userId: number, book: BookModel): Observable<BookModel> {
    const allBooks = this.getAllBooksByUser(userId);
    book.ID = allBooks.length;
    this.saveInDB(`books/${userId}/${allBooks.length}`, book);
    this.bookSaved.next(this.getDataFromDB(`books/${userId}/${allBooks.length}`));
    return this.bookSaved;
  }

  getAllBooksByUser(userId: number): BookModel[] {
    const books = [];
    let counter = 0;
    while (!!this.dataBase.getItem(`books/${userId}/${counter}`)) {
      const book = this.getDataFromDB(`books/${userId}/${counter}`);
      books.push(book);
      counter++;
    }
    return books;
  }


  private getDataFromDB(endpoint: string) {
    return JSON.parse(this.dataBase.getItem(endpoint));
  }
  private saveInDB(endpoint: string, obj: object) {
    this.dataBase.setItem(endpoint, JSON.stringify(obj));
  }

  private removeInDB(endpoint: string, obj?: object) {
    this.dataBase.removeItem(endpoint);
  }
}
