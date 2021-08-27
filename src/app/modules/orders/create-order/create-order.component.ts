import { AgmMap } from '@agm/core';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaticMasterService } from '../../shared/services/static-master.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  @ViewChild('AgmMap') agmMap!: AgmMap;
  formType = 'addressForm'
  submitted = false
  toggle: any = {}
  location = {
    lat:'',
    lng:''
  }
  addressForm!: FormGroup;
  constructor(private staticsService: StaticMasterService, 
    private fb: FormBuilder, private ref:ChangeDetectorRef) {
    this.toggle = this.staticsService.toggle('profile')
  }

  ngOnInit(): void {
    this.initAddressDetailsForm()
  }

  initAddressDetailsForm() {
    this.addressForm = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      county: [''],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      lat:['', Validators.required],
      lng:['', Validators.required]
    });
  }

  //form validation and stepper
  async onSubmit(form: FormGroup, type: string) {
    // this.submitted = true;
    // // stop here if form is invalid
    // if (form.invalid) {
    //   return this.sharedService.scrollToFirstInvalidControl(this.el, this.componentRef);
    // }
    // this.submitted = false
    // switch (type) {
    //   case 'personalDetailsForm':
    //     this.formType = 'companyDetailsForm'
    //     break;
    //   case 'companyDetailsForm':
    //     this.formType =
    //       this.userType == 'ChiefAppraiser' || this.userType == 'AppraiserUser' ?
    //         'insuranceForm' : 'reviewForm'
    //     break;
    //   case 'insuranceForm':
    //     this.formType = 'reviewForm'
    //     break;
    //   // case 'detailsForm':
    //   //   this.signUpUser()
    //   //   break;
    // }
  }

  //google auto complete address
  getAddress(address: any) {
    console.log(address,'address')
    this.addressForm.patchValue({
      street: address.street,
      city: address.city,
      county: address.county,
      state: address.state,
      zipcode: address.zipcode,
      lat:address.lat,
      lng:address.long
    })
    this.ref.detectChanges()
    // const bounds  = new google.maps.LatLngBounds();
    // const loc = new google.maps.LatLng(address.lat, address.long);
    // bounds.extend(loc);

  }
  get c() { return this.addressForm.controls; }
}
