import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {NoWhiteSpace} from '../../../shared/validators/no-white-space.validator';
import {NumberOnly} from '../../../shared/validators/number.validator';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;
  constructor(private authService: AuthService, private router: Router) {
    this.form = new FormGroup({
      phone: new FormControl(null, [Validators.required, NumberOnly.validator]),
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

  login(value) {
  this.authService.login(value).subscribe(user => {
  this.router.navigateByUrl('dashboard');
  },  err => this.errorMessage = err);
  }

}

