import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersModule } from './modules/users/users.module';
import { SharedModule } from './modules/shared/shared.module';
import { SharedService } from './modules/shared/services/shared.service';
import { RegisterComponent } from './modules/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    SharedModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
