import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppraisersComponent } from './appraisers/appraisers.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientsEmployeeComponent } from './clients-employee/clients-employee.component';
import { IntegrationDetailsComponent } from './integration-details/integration-details.component';
import { LandingComponent } from './landing/landing.component';
import { OverviewComponent } from './overview/overview.component';
import { PaymentsComponent } from './payments/payments.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'client-details',
        component: ClientDetailsComponent,
      },
      {
        path: 'integration-details',
        component: IntegrationDetailsComponent,
      },
      {
        path: 'appraisers',
        component: AppraisersComponent,
      },
      {
        path: 'invoice-payments',
        component: PaymentsComponent,
      },
      {
        path: 'clients-employee',
        component: ClientsEmployeeComponent,
      },
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
    ],
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule {
}


