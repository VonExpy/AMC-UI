import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './components/shared/shared.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    SharedComponent,
    OrdersComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [OrdersComponent,ProfileComponent]
})
export class SharedModule { }
