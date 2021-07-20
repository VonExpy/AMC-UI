import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../modules/auth/services/auth.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('../modules/clients/clients.module').then((m) => m.ClientsModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../modules/users/users.module').then((m) => m.UsersModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('../modules/orders/orders.module').then((m) => m.OrdersModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'vendors',
        loadChildren: () =>
          import('../modules/vendors/vendors.module').then((m) => m.VendorsModule),
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'errors/404',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
