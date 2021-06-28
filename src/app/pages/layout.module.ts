import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NavigationComponent } from './layout/components/navigation/navigation.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { ContactComponent } from './layout/components/contact/contact.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HomeComponent } from './layout/components/home/home.component';
import { AboutComponent } from './layout/components/about/about.component';



@NgModule({
  declarations: [
    LayoutComponent,
    NavigationComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class LayoutModule { }
