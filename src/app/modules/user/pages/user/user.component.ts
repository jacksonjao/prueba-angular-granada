import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../../shared/models/user.model';
import {AuthService} from '../../../../core/services/auth.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: UserModel;
  constructor(private authService: AuthService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.authService.getUserLogged().pipe(take(1)).subscribe(user => {
      this.user = user;
    });
  }

  logOut() {
    this.router.navigateByUrl('login');
    this.authService.logOut();
  }


}
