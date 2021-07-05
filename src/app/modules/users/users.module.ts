import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { ClientsComponent } from './clients/clients.component';
import { JobtypesComponent } from './jobtypes/jobtypes.component';
import { CoverageComponent } from './coverage/coverage.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { ProductsVendorsComponent } from './products-vendors/products-vendors.component';
import { AddFormComponent } from './fee-structure/add-form/add-form.component';
import { MockServerResultsService } from './orders/paging/mock-server-results-service';

@NgModule({
  declarations: [
    LandingComponent,
    ListComponent,
    DetailsComponent,
    ProfileComponent,
    OrdersComponent,
    OrganisationComponent,
    ClientsComponent,
    JobtypesComponent,
    CoverageComponent,
    FeeStructureComponent,
    ProductsVendorsComponent,
    AddFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers:[MockServerResultsService]
})
export class UsersModule { }
