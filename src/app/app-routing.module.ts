import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DcsDashboardComponent } from './dashboards/dcs-dashboard/dcs-dashboard.component';
import { RcmDashboardComponent } from './dashboards/rcm-dashboard/rcm-dashboard.component';
import { RcmBillingComponent } from './billing/rcm-billing/rcm-billing.component';
import { DcsBillingComponent } from './billing/dcs-billing/dcs-billing.component';


const routes: Routes = [
  { path: '', redirectTo: 'dcs-dashboard', pathMatch: 'full' },
  { path: 'dcs-dashboard', component: DcsDashboardComponent },
  { path: 'rcm-dashboard', component: RcmDashboardComponent },
  { path: 'rcm-billing', component: RcmBillingComponent },
  { path: 'dcs-billing', component: DcsBillingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
