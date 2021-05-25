import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { EmployeesComponent } from './employees/employees.component';


@NgModule({
  declarations: [
    LandingComponent,
    ListComponent,
    DetailsComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
