import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './components/shared/shared.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NgToggleModule } from 'ng-toggle-button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SharedComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    NgToggleModule,
    ReactiveFormsModule
  ],
  exports: [SideNavComponent,NgToggleModule,ReactiveFormsModule]
})
export class SharedModule { }
