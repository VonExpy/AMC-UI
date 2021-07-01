import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private customSubject = new Subject<any>();
  customObservable = this.customSubject.asObservable();
  constructor() { }

  customData(value:any){
    this.customSubject.next(value);
  }
}
