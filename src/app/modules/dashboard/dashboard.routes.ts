import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';

const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
  }
];

export const DASHBOARD_ROUTING = RouterModule.forChild(DASHBOARD_ROUTES);

