import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { VendorsRoutingModule } from './vendors-routing.module';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { OverviewComponent } from './overview/overview.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorsListComponent } from './vendors-list/vendors-list.component';
import { CustomListComponent } from './custom-list/custom-list.component';
import { AscSearchComponent } from './asc-search/asc-search.component';
import { MockServerVendorsService } from './vendors-list/paging/mock-server-vendors-service';



@NgModule({
  declarations: [
    LandingComponent,
    DetailsComponent,
    ListComponent,
    OverviewComponent,
    VendorDetailsComponent,
    VendorsListComponent,
    CustomListComponent,
    AscSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VendorsRoutingModule
  ],
  providers:[MockServerVendorsService]
})
export class VendorsModule { }
