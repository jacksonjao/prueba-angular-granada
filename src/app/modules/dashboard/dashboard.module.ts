import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {DASHBOARD_ROUTING} from './dashboard.routes';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DASHBOARD_ROUTING,
    RouterModule,
    SharedModule
  ]
})
export class DashboardModule { }
