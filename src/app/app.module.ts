import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { SharedService } from './modules/shared/services/shared.service';
import { LoaderService } from './modules/shared/services/loader.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './modules/shared/services/interceptors/loader-interceptor.service';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { JwtInterceptor } from './_helpers/JwtInterceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { fakeBackendProvider } from './_helpers/fake-backend';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAP_API_KEY,
      libraries: ['places', 'drawing']
    }),
    HttpClientModule
  ],
  providers: [SharedService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
