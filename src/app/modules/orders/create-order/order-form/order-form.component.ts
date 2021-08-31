import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { StaticMasterService } from 'src/app/modules/shared/services/static-master.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  @Input() control:any
  toggle: any = {}
  constructor(public staticsService: StaticMasterService, private ref:ChangeDetectorRef) {
    this.toggle = this.staticsService.toggle('profile')
   }

  ngOnInit(): void {
  }

  getAddress(address:any){
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
  }

  get f() { return this.control.controls; }

}
