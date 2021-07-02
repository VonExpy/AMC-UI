import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  constructor(private sharedService: SharedService, private fb: FormBuilder) { }
  orgForm!: FormGroup;
  submitted = false;
  edit: any = true;
  config = {
    value: true,
    name: "test",
    disabled: false,
    height: 25,
    width: 75,
    margin: 2,
    fontSize: 13,
    speed: 300,
    color: {
      checked: "#1B6E3F",
      unchecked: "#cccccc"
    },
    switchColor: {
      checked: "#F8F8F8",
      unchecked: "#F8F8F8"
    },
    labels: {
      unchecked: "",
      checked: "Active"
    },
    checkedLabel: "",
    uncheckedLabel: "",
    fontColor: {
      checked: "#fafafa",
      unchecked: "#ffffff"
    }
  };
  toggle = {
    value: true,
    name: "test",
    disabled: false,
    height: 18,
    width: 35,
    margin: 1,
    fontSize: 13,
    speed: 300,
    color: {
      checked: "#1B6E3F",
      unchecked: "#cccccc"
    },
    switchColor: {
      checked: "#F8F8F8",
      unchecked: "#F8F8F8"
    },
    labels: {
      unchecked: "",
      checked: ""
    },
    checkedLabel: "",
    uncheckedLabel: "",
    fontColor: {
      checked: "#fafafa",
      unchecked: "#ffffff"
    }
  };
  public scrollbarOptions = {
    theme: 'dark-3',
    // theme: 'minimal-dark',
    autoHideScrollbar: true,
    scrollButtons: { enable: false }
  };
  ngOnInit(): void {
    this.initProfileForm()
  }

  editform() {
    this.edit = !this.edit;
  }

  openSideNav() {
    // this.sharedService.sideNav({action:'open',component:CoverageComponent});
  }

  initProfileForm() {
    this.orgForm = this.fb.group({
      orgName: ['Vonexpy Softech LLC', Validators.required],
      email: ['test@gmail.com', Validators.compose([
        Validators.required,
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      fax: ['', Validators.required],
      ein: ['', Validators.required],
      phone: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      county: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      contactName: ['', Validators.required],
      contactPhone: ['', Validators.required],
      contactEmail: ['', Validators.compose([
        Validators.required,
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      bankDetails: new FormArray([this.bankDetailsForm()])
    });
  }

  // initialization of bankDetails
  bankDetailsForm() {
    return this.fb.group({
      accountType: ['', Validators.required],
      bankName: ['', Validators.required],
      routingNumber: ['', Validators.required],
      accountNumber: ['', Validators.required]
    })
  }

  // Add new form
  add() {
    this.t.push(this.bankDetailsForm())
  }

  delete(i: number) {
    this.t.removeAt(i)
  }

  // this.t.removeAt(i);

  //google auto complete address
  getAddress(address: any) {
    this.orgForm.patchValue({
      street: address.street,
      city: address.city,
      county: address.county,
      state: address.state,
      zipcode: address.zipcode
    })
  }

  get f() { return this.orgForm.controls; }
  get t() { return this.f.bankDetails as FormArray; }

  onSubmit(form: FormGroup) {
    this.submitted = true;

    console.log('hit')
    // stop here if form is invalid
    if (form.invalid) {
      return;
    }
    console.log(form.value, 'form value')
  }

}
