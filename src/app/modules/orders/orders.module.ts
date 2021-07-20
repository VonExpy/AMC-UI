import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { PaymentsComponent } from './payments/payments.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LandingComponent,
    ListComponent,
    DetailsComponent,
    PaymentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
