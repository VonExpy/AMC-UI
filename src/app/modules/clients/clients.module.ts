import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { LandingComponent } from './landing/landing.component';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { IntegrationDetailsComponent } from './integration-details/integration-details.component';
import { AppraisersComponent } from './appraisers/appraisers.component';
import { PaymentsComponent } from './payments/payments.component';
import { ClientsEmployeeComponent } from './clients-employee/clients-employee.component';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    LandingComponent,
    DetailsComponent,
    OverviewComponent,
    ClientDetailsComponent,
    IntegrationDetailsComponent,
    AppraisersComponent,
    PaymentsComponent,
    ClientsEmployeeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
