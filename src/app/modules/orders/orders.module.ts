import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { LandingComponent } from './landing/landing.component';
import { PaymentsComponent } from './payments/payments.component';
import { SharedModule } from '../shared/shared.module';

import { FeeCostComponent } from './order-view/order-summary/fee-cost/fee-cost.component';
import { DatesComponent } from './order-view/order-summary/dates/dates.component';
import { OrderDetailsComponent } from './order-view/order-summary/order-details/order-details.component';
import { AppraisersComponent } from './order-view/order-summary/appraisers/appraisers.component';
import { LocationComponent } from './order-view/order-summary/location/location.component';
import { InstructionsComponent } from './order-view/order-summary/instructions/instructions.component';
import { ActivityFeedsComponent } from './order-view/order-summary/activity-feeds/activity-feeds.component';
import { ChatComponent } from './order-view/order-summary/chat/chat.component';
import { DocumentsUploadComponent } from './order-view/order-summary/documents-upload/documents-upload.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { StatusNavComponent } from './order-view/status-nav/status-nav.component';
import { VendorDetailsComponent } from './order-view/order-summary/vendor-details/vendor-details.component';
import { OrderSummaryComponent } from './order-view/order-summary/order-summary.component';
import { WorkFlowComponent } from './order-view/order-summary/work-flow/work-flow.component';
import { ClientDetailsComponent } from './order-view/order-summary/client-details/client-details.component';
import { InspectionComponent } from './order-view/inspection/inspection.component';
import { ComparablesComponent } from './order-view/comparables/comparables.component';
import { PreviewComponent } from './order-view/preview/preview.component';


@NgModule({
  declarations: [
    LandingComponent,
    PaymentsComponent,
    OrderViewComponent,
    ClientDetailsComponent,
    StatusNavComponent,
    VendorDetailsComponent,
    WorkFlowComponent,
    FeeCostComponent,
    DatesComponent,
    OrderDetailsComponent,
    AppraisersComponent,
    LocationComponent,
    InstructionsComponent,
    ActivityFeedsComponent,
    ChatComponent,
    DocumentsUploadComponent,
    OrderSummaryComponent,
    InspectionComponent,
    ComparablesComponent,
    PreviewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
