import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { SharedService } from '../../../services/shared.service';
import { StaticMasterService } from '../../../services/static-master.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  profileForm!: FormGroup;
  submitted = false;
  edit: any = false;
  toggle: any = {}
  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  constructor(private fb: FormBuilder, private staticService: StaticMasterService,
    private sharedService:SharedService,
    private cd: ChangeDetectorRef, private el: ElementRef) {
    this.toggle = this.staticService.toggle('profile')
  }
  ngOnInit(): void {
    this.initProfileForm()
  }

  editform() {
    this.edit = !this.edit;
  }

  initProfileForm() {
    this.profileForm = this.fb.group({
      firstName: ['Arun Sameer', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ])],
      middleName: ['', Validators.compose([
        Validators.pattern('^[a-zA-Z ]*$')
      ])],
      lastName: ['Sameer', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ])],
      role: ['Koduri', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      phone: ['', Validators.compose([
        Validators.required
      ])],
      street: ['', Validators.required],
      city: ['', Validators.required],
      county: [''],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
    });
  }


  //google auto complete address
  getAddress(address: any) {
    this.profileForm.patchValue({
      street: address.street,
      city: address.city,
      county: address.county,
      state: address.state,
      zipcode: address.zipcode
    })
    this.cd.detectChanges()
  }

  get f() { return this.profileForm.controls; }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    // stop here if form is invalid
    if (form.invalid) {
      return this.sharedService.scrollToFirstInvalidControl(this.el,this.componentRef)
    }
    this.edit = false
    console.log(form.value, 'form value')
  }



}
