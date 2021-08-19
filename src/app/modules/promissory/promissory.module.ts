import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromissoryComponent } from './promissory.component';
import { PromissoryMainComponent } from './promissory-main/promissory-main.component';
import { PromissoryHeaderComponent } from './promissory-header/promissory-header.component';
import { PromissoryFooterComponent } from './promissory-footer/promissory-footer.component';
import { PromissoryRoutingModule } from './promissory-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PromissoryComponent,
    PromissoryMainComponent,
    PromissoryHeaderComponent,
    PromissoryFooterComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    PromissoryRoutingModule,
    SharedModule
  ]
})
export class PromissoryModule { }
