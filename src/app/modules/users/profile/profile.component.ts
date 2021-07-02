import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  profileForm!: FormGroup;
  submitted = false;
  edit: any = false;
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
  public scrollbarOptionsx = {
    // theme: 'dark-3',
    theme: 'minimal-dark',
    autoHideScrollbar: true,
    scrollButtons: { enable: false }
  };

  ngOnInit(): void {
    this.initProfileForm()
  }

  editform() {
    this.edit = !this.edit;
  }

  initProfileForm() {
    this.profileForm = this.fb.group({
      firstName: ['Arun Sameer', Validators.required],
      middleName: '',
      lastName: ['Koduri', Validators.required],
      role: ['Koduri', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      phone: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      county: ['', Validators.required],
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
  }

  get f() { return this.profileForm.controls; }

  onSubmit(form: FormGroup) {
    this.submitted = true;

    console.log('hit')
    // stop here if form is invalid
    if (form.invalid) {
      return;
    }
    this.edit = false
    console.log(form.value, 'form value')
  }

}
