import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //side nav
  private customSubject = new Subject<any>();
  customObservable = this.customSubject.asObservable();
  selectedItem: any

  //modal popup
  private modalSubject = new Subject<any>();
  modalObservable = this.modalSubject.asObservable();
  constructor() { }

  sideNav(value: any) {
    this.customSubject.next(value);
  }

  modal(value: any) {
    this.modalSubject.next(value);
  }

  closeSlider() {
    this.sideNav({ action: 'close' })
  }

  scrollToFirstInvalidControl(ele: any, componentRef: any) {
    const firstInvalidControl: HTMLElement = ele.nativeElement.querySelector(
      "form .ng-invalid"
    );
    console.log(firstInvalidControl,'firstInvalidControl')
    if (componentRef && componentRef.directiveRef) {
      console.log('hit')
      componentRef.directiveRef.scrollToElement(firstInvalidControl, 0, 1000);
    }
  }
}
