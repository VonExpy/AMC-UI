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
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { GlobalSearchComponent } from './components/global-search/global-search.component';
import { QuillEditorComponent } from './components/quill-editor/quill-editor.component';
import { QuillModule } from 'ngx-quill'
import { AccordionDirective } from 'src/app/_helpers/accordion.directive';
import { PhoneMaskDirective } from 'src/app/_helpers/phone-mask.directive';
import { NgxMaskModule } from 'ngx-mask'
import { OrdersComponent } from './components/orders/orders.component';
import { MockServerResultsService } from './components/orders/paging/mock-server-results-service';
import { MockServerClientsService } from './components/clients/paging/mock-server-results-service';
import { ClientsComponent } from './components/clients/clients.component';

FullCalendarModule.registerPlugins([ 
  interactionPlugin,
  dayGridPlugin,
  timeGridPlugin
]);



@NgModule({
  declarations: [
    SharedComponent,
    SliderComponent,
    ModalPopupComponent,
    LoaderComponent,
    AutoCompleteComponent,
    SolidGuageComponent,
    BarChartComponent,
    DoughnutChartComponent,
    GlobalSearchComponent,
    QuillEditorComponent,
    AccordionDirective,
    PhoneMaskDirective,
    OrdersComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    NgToggleModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    NgToggleModule,
    NgxDatatableModule,
    ChartsModule,
    RoundProgressModule,
    MalihuScrollbarModule.forRoot(),
    FullCalendarModule,
    QuillModule.forRoot(),
    NgxMaskModule.forRoot()
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
    AutoCompleteComponent,
    NgSelectModule,
    FormsModule,
    RoundProgressModule,
    MalihuScrollbarModule,
    FullCalendarModule,
    GlobalSearchComponent,
    QuillEditorComponent,
    AccordionDirective,
    PhoneMaskDirective,
    NgxMaskModule,
    OrdersComponent,
    ClientsComponent
  ],
  providers:[MockServerResultsService,MockServerClientsService]
})
export class SharedModule { }
