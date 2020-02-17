import { Component, OnInit } from '@angular/core';
import {BookModel} from '../../../../shared/models/book.model';
import {BooksService} from '../../../../core/services/books.service';
import {AuthService} from '../../../../core/services/auth.service';
import {take} from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private booksService: BooksService, private authService: AuthService, private location: Location) { }

  ngOnInit() {
  }

  save(event: BookModel) {
    this.authService.getUserLogged().pipe(take(1)).subscribe(user => {
      if (window.confirm('Desea crear el libro')) {
        this.booksService.saveBook(user.id, event).pipe(take(1));
        this.location.back();
      }
    });

  }

}
