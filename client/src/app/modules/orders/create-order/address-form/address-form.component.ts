import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  @Input() control:any
  submitted:boolean = false

  constructor(private ref: ChangeDetectorRef,
     private fb: FormBuilder, 
     private sharedService:SharedService,
     private ele:ElementRef) { 

     }

  ngOnInit(): void {
  }

  //google auto complete address
  getAddress(address: any) {
    console.log(address, 'address')
    this.control.patchValue({
      street: address.street,
      city: address.city,
      county: address.county,
      state: address.state,
      zipcode: address.zipcode,
      lat: address.lat,
      lng: address.long
    })
    this.ref.detectChanges()
    // const bounds  = new google.maps.LatLngBounds();
    // const loc = new google.maps.LatLng(address.lat, address.long);
    // bounds.extend(loc);

  }


  get c() { return this.control.controls; }



}
