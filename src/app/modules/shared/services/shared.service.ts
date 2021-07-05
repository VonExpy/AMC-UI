import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //side nav
  private customSubject = new Subject<any>();
  customObservable = this.customSubject.asObservable();

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
}
