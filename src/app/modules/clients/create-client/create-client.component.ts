import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { SharedService } from '../../shared/services/shared.service';
import { StaticMasterService } from '../../shared/services/static-master.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  formType = 'basicInfoForm'
  basicInfoForm!: FormGroup;
  contactInfoForm!: FormGroup;
  insuranceForm!: FormGroup;
  submitted = false;
  toggle: any = {}
  userTypes: { name: string; value: string; }[];
  userType = 'ChiefAppraiser'
  appraiserTypes: { type: string; id: string; }[];
  states: { value: string; id: number; name: string; }[];
  certifications: { name: string; id: string; }[];
  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  types: { name: string; id: string; }[];
  constructor(public staticService: StaticMasterService, private fb: FormBuilder,
    public sharedService: SharedService,
    private el: ElementRef,
    private cd: ChangeDetectorRef) {
    this.toggle = this.staticService.toggle('profile')
    this.userTypes = this.staticService.getUsersByRole('AD')
    this.types = this.staticService.getType();
    this.appraiserTypes = this.staticService.getAppraiserTypes();
    this.states = this.staticService.getStates();
    this.certifications = this.staticService.getCertifications();
  }

  ngOnInit(): void {
    this.initBasicInfoForm()
    this.initCompanyForm()
    this.initEOInsuranceForm()
    this.onNameChange()
  }

  //acronym binding
  onNameChange(){
    this.basicInfoForm.get('name')?.valueChanges.subscribe((val:any)=>{
      if(val){
        this.basicInfoForm.patchValue({ acronym: val.match(/\b(\w)/g).join('').toUpperCase() })
      }else{
        this.basicInfoForm.patchValue({ acronym:''})
      }
    })
  }

  initBasicInfoForm() {
    this.basicInfoForm = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(100)
      ])],
      acronym: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(100)
      ])],
      email: ['', Validators.compose([
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      type:[null],
      phone: [''],
      fax: [''],
      website:[''],
      license:[''],
      expiryDate:[''],
      street: [''],
      city: [''],
      county: [''],
      state: [''],
      zipcode: [''],
    });
  }

  initCompanyForm() {
    this.contactInfoForm = this.fb.group({
      contactName: ['', Validators.compose([
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(100)
      ])],
      contactPhone: [''],
      contactEmail: ['', Validators.compose([
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      portalUrl:[''],
      userId:[''],
      password:[''],
      tier:[''],
      contactStreet: [''],
      contactCity: [''],
      contactCounty: [''],
      contactState: [''],
      contactZipcode: [''],
    });
  }

  initEOInsuranceForm() {
    this.insuranceForm = this.fb.group({
      insuranceCompany: ['', Validators.compose([
        Validators.pattern('^[a-zA-Z ]*$'),
      ])],
      eoClaimAmount: [''],
      eoAggrAmount: [''],
      eoExpDate: ['']
    });
  }



  //google auto complete address
  getAddress(address: any, type: string) {
    if (type == 'basic') {
      this.basicInfoForm.patchValue({
        street: address.street,
        city: address.city,
        county: address.county,
        state: address.state,
        zipcode: address.zipcode
      })
    }
    if (type == 'contact') {
      this.contactInfoForm.patchValue({
        contactStreet: address.street,
        contactCity: address.city,
        contactCounty: address.county,
        contactState: address.state,
        contactZipcode: address.zipcode
      })
    }
    this.cd.detectChanges()
  }

  gotoPrevious(formType: string) {
    this.formType = formType
  }

  get f() { return this.basicInfoForm.controls; }
  get c() { return this.contactInfoForm.controls; }
  get e() { return this.insuranceForm.controls; }

  //form validation and stepper
  async onSubmit(form: FormGroup, type: string) {
    this.submitted = true;
    // stop here if form is invalid
    if (form.invalid) {
      return this.sharedService.scrollToFirstInvalidControl(this.el, this.componentRef);
    }
    this.submitted = false
    switch (type) {
      case 'basicInfoForm':
        this.formType = 'contactInfoForm'
        break;
      case 'contactInfoForm':
        this.formType = 'reviewForm'
        break;
    }
  }


}
