import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
        // {
        //   path: 'profile',
        //   component: ProfileComponent,
        // },
        
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
export class AccountsRoutingModule { }