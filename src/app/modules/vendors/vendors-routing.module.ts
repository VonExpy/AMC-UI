import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppraisersComponent } from '../shared/components/appraisers/appraisers.component';
import { AscSearchComponent } from './asc-search/asc-search.component';
import { CustomListComponent } from './custom-list/custom-list.component';
import { LandingComponent } from './landing/landing.component';
import { OverviewComponent } from './overview/overview.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorsListComponent } from './vendors-list/vendors-list.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'vendors-list',
        component: VendorsListComponent,
      },
      {
        path: 'custom-list',
        component: CustomListComponent,
      },
      {
        path: 'asc-search',
        component: AscSearchComponent,
      },
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'vendor-details',
        component:VendorDetailsComponent ,
      },
      {
        path:'appraisers',
        component:AppraisersComponent
      },
      {
        path: '',
        redirectTo: 'vendors-list',
        pathMatch: 'full',
      },
    ],
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorsRoutingModule {
}


