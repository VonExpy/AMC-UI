import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { UsersModule } from './modules/users/users.module';
import { SharedModule } from './modules/shared/shared.module';
import { SharedService } from './modules/shared/services/shared.service';
import { LoaderService } from './modules/shared/services/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './modules/shared/services/interceptors/loader-interceptor.service';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // UsersModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAP_API_KEY,
      libraries: ['places', 'drawing']
    }),
  ],
  providers: [SharedService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
