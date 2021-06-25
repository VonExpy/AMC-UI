import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './components/shared/shared.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    SharedComponent,
    OrdersComponent,
    ProfileComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [OrdersComponent,ProfileComponent,SideNavComponent]
})
export class SharedModule { }
