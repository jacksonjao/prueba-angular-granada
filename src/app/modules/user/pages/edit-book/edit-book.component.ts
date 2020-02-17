import { Component, OnInit } from '@angular/core';
import {BookModel} from '../../../../shared/models/book.model';
import {take} from 'rxjs/operators';
import {BooksService} from '../../../../core/services/books.service';
import {AuthService} from '../../../../core/services/auth.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
 book: BookModel;
  constructor(private booksService: BooksService, private authService: AuthService, private location: Location, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(take(1)).subscribe(value => {
      this.authService.getUserLogged().pipe(take(1)).subscribe(user => {
      this.book = this.booksService.getBookByUser(user.id, value.id);
      });
    });
  }

  save(event: BookModel) {
    this.authService.getUserLogged().pipe(take(1)).subscribe(user => {
      if (window.confirm('¿Desea guardar los cambios?')) {
        this.booksService.saveBook(user.id, event).pipe(take(1));
        this.location.back();
      }
    });

  }
}
