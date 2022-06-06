import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { LandingComponent } from './landing/landing.component';
import { PaymentsComponent } from './payments/payments.component';
import { SharedModule } from '../shared/shared.module';

import { OrderViewComponent } from './order-view/order-view.component';
import { StatusNavComponent } from './order-view/status-nav/status-nav.component';
import { OrderSummaryComponent } from './order-view/order-summary/order-summary.component';
import { InspectionComponent } from './order-view/inspection/inspection.component';
import { ComparablesComponent } from './order-view/comparables/comparables.component';
import { PreviewComponent } from './order-view/preview/preview.component';
import { StatusesComponent } from './landing/statuses/statuses.component';
import { OrdersNavComponent } from './landing/orders-nav/orders-nav.component';
import { OrdersTableComponent } from './landing/orders-table/orders-table.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { AddressFormComponent } from './create-order/address-form/address-form.component';
import { OrderFormComponent } from './create-order/order-form/order-form.component';
import { InstructionsFormComponent } from './create-order/instructions-form/instructions-form.component';
import { DocumentsFormComponent } from './create-order/documents-form/documents-form.component';
import { ReviewFormComponent } from './create-order/review-form/review-form.component';
import { AppraiserDueComponent } from './order-view/appraiser-due/appraiser-due.component';
import { LenderComponent } from './order-view/lender/lender.component';
import { AppraisersComponent } from './order-view/appraisers/appraisers.component';
import { FeeCostsComponent } from './order-view/fee-costs/fee-costs.component';
import { DocumentsComponent } from './order-view/documents/documents.component';
import { MessagesComponent } from './order-view/messages/messages.component';
import { ActivityFeedComponent } from './order-view/activity-feed/activity-feed.component';
import { InstructionsComponent } from './order-view/instructions/instructions.component';


@NgModule({
  declarations: [
    LandingComponent,
    PaymentsComponent,
    OrderViewComponent,
    StatusNavComponent,
    OrderSummaryComponent,
    InspectionComponent,
    ComparablesComponent,
    PreviewComponent,
    StatusesComponent,
    OrdersNavComponent,
    OrdersTableComponent,
    CreateOrderComponent,
    AddressFormComponent,
    OrderFormComponent,
    InstructionsFormComponent,
    DocumentsFormComponent,
    ReviewFormComponent,
    AppraiserDueComponent,
    LenderComponent,
    AppraisersComponent,
    FeeCostsComponent,
    DocumentsComponent,
    MessagesComponent,
    ActivityFeedComponent,
    InstructionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
