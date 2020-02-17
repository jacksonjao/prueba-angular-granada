import { Component, OnInit } from '@angular/core';
import {DataHeaderService} from '../../../../core/services/data-header.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../../core/services/auth.service';
import {UserModel} from '../../../../shared/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: UserModel;
  constructor(private serviceHeader: DataHeaderService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.serviceHeader.setdata({id: '', data: null});
    this.authService.getUserLogged().subscribe(user => {
      this.user = user;
    });
  }

  logOut() {
    this.router.navigateByUrl('login');
    this.authService.logOut();
  }

}
