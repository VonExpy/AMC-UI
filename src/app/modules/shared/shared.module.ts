import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './components/shared/shared.component';
import { NgToggleModule } from 'ng-toggle-button';
import { ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    SharedComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    NgToggleModule,
    ReactiveFormsModule
  ],
  exports: [NgToggleModule,ReactiveFormsModule,SliderComponent]
})
export class SharedModule { }
