import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from '../shared/components/orders/orders.component';
import { ClientsComponent } from './clients/clients.component';
import { CoverageComponent } from './coverage/coverage.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { JobtypesComponent } from './jobtypes/jobtypes.component';
import { LandingComponent } from './landing/landing.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { ProductsVendorsComponent } from './products-vendors/products-vendors.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
        {
          path: 'profile',
          component: ProfileComponent,
        },
        {
          path: 'orders',
          component: OrdersComponent,
        },
        {
          path: 'organisation',
          component: OrganisationComponent,
        },
        {
          path: 'clients',
          component: ClientsComponent,
        },
        {
          path: 'jobtypes',
          component: JobtypesComponent,
        },
        {
          path: 'coverage',
          component: CoverageComponent,
        },
        {
          path: 'coverage',
          component: CoverageComponent,
        },
        {
          path: 'fee-structure',
          component: FeeStructureComponent,
        },
        {
          path: 'products-vendors',
          component: ProductsVendorsComponent,
        },
        
        {
          path: '',
          redirectTo: 'profile',
          pathMatch: 'full',
        },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
