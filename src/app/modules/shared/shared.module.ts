import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './components/shared/shared.component';
import { NgToggleModule } from 'ng-toggle-button';
import { ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './components/slider/slider.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalPopupComponent } from './components/modal-popup/modal-popup.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ChartsModule } from 'ng2-charts';
import { SolidGuageComponent } from './components/charts/solid-guage/solid-guage.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/charts/doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [
    SharedComponent,
    SliderComponent,
    ModalPopupComponent,
    LoaderComponent,
    AutoCompleteComponent,
    SolidGuageComponent,
    BarChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    NgToggleModule,
    ReactiveFormsModule,
    NgToggleModule,
    NgxDatatableModule,
    ChartsModule
  ],
  exports: [
    NgToggleModule,
    ReactiveFormsModule,
    SliderComponent,
    NgxDatatableModule,
    ModalPopupComponent,
    LoaderComponent,
    SolidGuageComponent,
    BarChartComponent,
    ChartsModule,
    DoughnutChartComponent,
    AutoCompleteComponent
  ]
})
export class SharedModule { }
