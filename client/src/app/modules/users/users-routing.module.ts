import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from '../shared/components/clients/clients.component';
import { OrdersComponent } from '../shared/components/orders/orders.component';
import { CoverageComponent } from '../shared/components/profile/coverage/coverage.component';
import { FeeStructureComponent } from '../shared/components/profile/fee-structure/fee-structure.component';
import { JobtypesComponent } from '../shared/components/profile/jobtypes/jobtypes.component';
import { OrganisationComponent } from '../shared/components/profile/organisation/organisation.component';
import { PersonalInfoComponent } from '../shared/components/profile/personal-info/personal-info.component';
import { ProductsVendorsComponent } from '../shared/components/profile/products-vendors/products-vendors.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
        {
          path: 'profile',
          component: PersonalInfoComponent,
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
