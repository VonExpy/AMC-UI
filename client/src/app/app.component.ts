import { Component } from '@angular/core';
import { LoaderService } from './modules/shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AMC';

  constructor(private loaderService:LoaderService){
    // this.loaderService.isLoading.next(true)
  }
}
