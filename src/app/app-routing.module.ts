import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmcPanelComponent } from './amc-panel/amc-panel.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  // {
  //   path: '',
  //   // canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./pages/layout.module').then((m) => m.LayoutModule),
  // },
  {
    path: '',
    component: AmcPanelComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./modules/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
