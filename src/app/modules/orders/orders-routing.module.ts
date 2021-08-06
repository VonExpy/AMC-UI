import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ComparablesComponent } from './order-view/comparables/comparables.component';
import { InspectionComponent } from './order-view/inspection/inspection.component';
import { OrderSummaryComponent } from './order-view/order-summary/order-summary.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { PreviewComponent } from './order-view/preview/preview.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'view',
    component: OrderViewComponent,
    children: [
      {
        path: 'order-summary',
        component: OrderSummaryComponent,
      },
      {
        path: 'inspection',
        component: InspectionComponent,
      },
      {
        path: 'comparables',
        component: ComparablesComponent,
      },
      {
        path: 'preview',
        component: PreviewComponent,
      },
      // {
      //   path: '',
      //   redirectTo: 'profile',
      //   pathMatch: 'full',
      // },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrdersRoutingModule { }
