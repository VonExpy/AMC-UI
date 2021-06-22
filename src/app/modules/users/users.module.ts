import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { NgToggleModule } from 'ng-toggle-button';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LandingComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MalihuScrollbarModule.forRoot(),
    RoundProgressModule,
    NgToggleModule,
    UsersRoutingModule,
    SharedModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ]
})
export class UsersModule { }
