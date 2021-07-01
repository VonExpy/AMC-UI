import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './components/shared/shared.component';
import { NgToggleModule } from 'ng-toggle-button';
import { ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './components/slider/slider.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalPopupComponent } from './components/modal-popup/modal-popup.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    SharedComponent,
    SliderComponent,
    ModalPopupComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    NgToggleModule,
    ReactiveFormsModule,
    NgToggleModule,
    NgxDatatableModule
  ],
  exports: [
    NgToggleModule,
    ReactiveFormsModule,
    SliderComponent,
    NgxDatatableModule,
    ModalPopupComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
