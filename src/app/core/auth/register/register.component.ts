import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {NoWhiteSpace} from '../../../shared/validators/no-white-space.validator';
import {NumberOnly} from '../../../shared/validators/number.validator';
import {distinctUntilChanged, take} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {error} from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;
  constructor(private authService: AuthService, private router: Router) {
    this.form = new FormGroup({
      firstName: new FormControl(null, [Validators.required, NoWhiteSpace.validator]),
      lastName: new FormControl(null, [Validators.required, NoWhiteSpace.validator]),
      phone: new FormControl(null, [Validators.required, NumberOnly.validator]),
      email: new FormControl(null, [Validators.required, NoWhiteSpace.validator, Validators.email]),
      password: new FormControl(null, [Validators.required, NoWhiteSpace.validator]),
    });
  }

  ngOnInit() {
    this.authService.getUserLogged().pipe(take(1)).subscribe(user => {
      if (!!user) {
        this.router.navigateByUrl('dashboard');
      }
    });
  }

  register(value) {
    if (this.form.valid) {
      this.authService.register(value).pipe(take(1)).subscribe(user => {
        this.router.navigateByUrl('dashboard');
        console.log(user);
      }, err =>  this.errorMessage = err);

    } else {
      this.errorMessage = 'Debe llenar todos los campos';
    }
  }

  logOut() {

  }
}



