import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookModel} from '../../../../shared/models/book.model';
import {Location} from '@angular/common';
import {DataHeaderService} from '../../../../core/services/data-header.service';
import {DataHeaderModel} from '../../../../shared/models/data-header.model';
import {BooksService} from '../../../../core/services/books.service';

@Component({
  selector: 'app-book-information',
  templateUrl: './book-information.component.html',
  styleUrls: ['./book-information.component.css']
})
export class BookInformationComponent implements OnInit {
  book: BookModel;
  dataHeader: DataHeaderModel;
  loading = true;
  constructor(private service: BooksService, private router: ActivatedRoute, private headerService: DataHeaderService) {
    this.dataHeader = {id: 'infoBook', data: null};
    this.headerService.setdata(this.dataHeader);
    this.book = new BookModel();
  }

  ngOnInit() {
    const ID = (this.router.params as any).value.id;
    this.service.getBookById(ID).subscribe(book => {
      this.dataHeader.data = {title: book.Title, date: book.PublishDate}
      this.headerService.setdata(this.dataHeader);
      this.book = book;
    });
  }

  onLoad() {
    this.loading = false;
  }

}
