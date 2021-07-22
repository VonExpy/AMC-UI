import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppraisersComponent } from '../shared/components/appraisers/appraisers.component';
import { LandingComponent } from './landing/landing.component';
import { OverviewComponent } from './overview/overview.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
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
        redirectTo: 'overview',
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


