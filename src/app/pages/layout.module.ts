import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NavigationComponent } from './layout/components/navigation/navigation.component';
import { HeaderComponent } from './layout/components/header/header.component';



@NgModule({
  declarations: [
    LayoutComponent,
    NavigationComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class LayoutModule { }
