import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { VendorsRoutingModule } from './vendors-routing.module';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { OverviewComponent } from './overview/overview.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';



@NgModule({
  declarations: [
    LandingComponent,
    DetailsComponent,
    ListComponent,
    OverviewComponent,
    VendorDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VendorsRoutingModule
  ]
})
export class VendorsModule { }
