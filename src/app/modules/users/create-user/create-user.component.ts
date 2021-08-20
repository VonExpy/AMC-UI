import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { SharedService } from '../../shared/services/shared.service';
import { StaticMasterService } from '../../shared/services/static-master.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  formType = 'personalDetailsForm'
  personalDetailsForm!: FormGroup;
  companyDetailsForm!: FormGroup;
  insuranceForm!: FormGroup;
  submitted = false;
  toggle: any = {}
  userTypes: { name: string; value: string; }[];
  userType = 'ChiefAppraiser'
  appraiserTypes: { type: string; id: string; }[];
  states: { value: string; id: number; name: string; }[];
  certifications: { name: string; id: string; }[];
  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  constructor(public staticService: StaticMasterService, private fb: FormBuilder,
    public sharedService: SharedService,
    private el: ElementRef,
    private cd: ChangeDetectorRef) {
    this.toggle = this.staticService.toggle('profile')
    this.userTypes = this.staticService.getUsersByRole('AD')
    this.appraiserTypes = this.staticService.getAppraiserTypes();
    this.states = this.staticService.getStates();
    this.certifications = this.staticService.getCertifications();
  }

  ngOnInit(): void {
    this.initPersonalDetailsForm()
    this.licensedUser()
    this.initCompanyForm()
    this.initEOInsuranceForm()
  }

  initPersonalDetailsForm() {
    this.personalDetailsForm = this.fb.group({
      role: ['ChiefAppraiser', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(100)
      ])],
      firstName: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(100)
      ])],
      middleName: ['', Validators.compose([
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(100)
      ])],
      lastName: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(100)
      ])],
      phone: ['', Validators.compose([
        Validators.required
      ])],
      altPhone: [''],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      street: ['', Validators.required],
      city: ['', Validators.required],
      county: [''],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
    });
  }

  initCompanyForm() {
    this.companyDetailsForm = this.fb.group({
      companyName: ['', Validators.compose([
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(100)
      ])],
      companyPhone: [''],
      companyEmail: ['', Validators.compose([
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      fax: [''],
      companyStreet: ['', Validators.required],
      companyCity: ['', Validators.required],
      companyCounty: [''],
      companyState: ['', Validators.required],
      companyZipcode: ['', Validators.required],
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

  // Add single or multiple controls here
  licensedUser(): void {
    this.personalDetailsForm = this.fb.group({
      ...this.personalDetailsForm.controls,
      certification: [null],
      appraiserType: [null, Validators.required],
      licenseNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      credentialState: [null],
      ssn: ['']
    });
  }

  //remove form control on user role change
  removeControls() {
    const controls = ['certification', 'appraiserType', 'licenseNumber', 'expiryDate', 'credentialState', 'ssn']
    controls.forEach((control) => {
      this.personalDetailsForm.removeControl(control);
    })
  }

  //on role change
  onUserTypeChange(role: string) {
    this.f.role.patchValue(role)
    if (role == 'ChiefAppraiser' || role == 'AppraiserUser') {
      this.licensedUser()
    } else {
      this.removeControls()
    }
  }

  //google auto complete address
  getAddress(address: any, type: string) {
    if (type == 'personal') {
      this.personalDetailsForm.patchValue({
        street: address.street,
        city: address.city,
        county: address.county,
        state: address.state,
        zipcode: address.zipcode
      })
    }
    if (type == 'company') {
      this.companyDetailsForm.patchValue({
        companyStreet: address.street,
        companyCity: address.city,
        companyCounty: address.county,
        companyState: address.state,
        companyZipcode: address.zipcode
      })
    }
    this.cd.detectChanges()
  }

  gotoPrevious(formType: string) {
    this.formType = formType
  }

  get f() { return this.personalDetailsForm.controls; }
  get c() { return this.companyDetailsForm.controls; }
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
      case 'personalDetailsForm':
        this.formType = 'companyDetailsForm'
        break;
      case 'companyDetailsForm':
        this.formType =
          this.userType == 'ChiefAppraiser' || this.userType == 'AppraiserUser' ?
            'insuranceForm' : 'reviewForm'
        break;
      case 'insuranceForm':
        this.formType = 'reviewForm'
        break;
      // case 'detailsForm':
      //   this.signUpUser()
      //   break;
    }
  }


}
