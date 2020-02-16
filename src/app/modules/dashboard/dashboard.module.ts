import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {DASHBOARD_ROUTING} from './dashboard.routes';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DASHBOARD_ROUTING
  ]
})
export class DashboardModule { }
