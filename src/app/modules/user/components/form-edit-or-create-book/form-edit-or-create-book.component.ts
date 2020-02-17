import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NumberOnly} from '../../../../shared/validators/number.validator';
import {NoWhiteSpace} from '../../../../shared/validators/no-white-space.validator';
import {Location} from '@angular/common';
import {BookModel} from '../../../../shared/models/book.model';

@Component({
  selector: 'app-form-edit-or-create-book',
  templateUrl: './form-edit-or-create-book.component.html',
  styleUrls: ['./form-edit-or-create-book.component.css']
})
export class FormEditOrCreateBookComponent implements OnInit, AfterContentInit {
  form: FormGroup;
  errorMessage: string;
  img: string;
  @Input() book: BookModel;
  @Output() saveEmit = new EventEmitter();
  constructor(private location: Location) {
    this.form = new FormGroup({
      uploadImage: new FormControl(null, [Validators.required]),
      Title: new FormControl(null, [Validators.required, NoWhiteSpace.validator]),
      Description: new FormControl(null, [Validators.required, NoWhiteSpace.validator]),
      PageCount: new FormControl(null, [Validators.required, NoWhiteSpace.validator]),
      PublishDate: new FormControl(null, [Validators.required, NoWhiteSpace.validator]),
      Excerpt: new FormControl(null),
    });
  }

  ngOnInit() {
  }

  cancel() {
    this.location.back();
  }

  save() {
    this.form.get('PublishDate').setValue(new Date('2020-02-09'));
    console.log(this.form);
    this.saveEmit.emit(this.form.value);
  }

  ngAfterContentInit(): void {
   /*Object.keys(this.form.value).forEach(key => {
      this.form.get(key).setValue(this.book[key]);
      console.log(this.book[key]);
    });*/
  }

}
