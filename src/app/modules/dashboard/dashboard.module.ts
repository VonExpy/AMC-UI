import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ChartOneComponent } from './components/chart-one/chart-one.component';
import { ChartTwoComponent } from './components/chart-two/chart-two.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    LandingComponent,
    ChartOneComponent,
    ChartTwoComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
