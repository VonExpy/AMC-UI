import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { PasswordStrengthValidator } from 'src/app/_helpers/password-strength.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  emailForm!: FormGroup
  accountForm!: FormGroup
  detailsForm!: FormGroup
  submitted = false
  formType = 'emailForm'
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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initEmailForm()
    this.initAccountForm()
    this.initDetailsForm()
  }

  initEmailForm() {
    this.emailForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])]
    });
  }

  initAccountForm() {
    this.accountForm = this.fb.group({
      firstName: ['', Validators.compose([
        Validators.required
      ])],
      lastName: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  initDetailsForm() {
    this.detailsForm = this.fb.group({
      phoneNumber: ['', Validators.compose([
        Validators.required
      ])],
      licenseNumber: ['', Validators.compose([
        Validators.required
      ])],
      referredBy: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        PasswordStrengthValidator
      ])],
      confirmPassword: ['', Validators.compose([
        Validators.required
      ])]
    }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  onSubmit(form: FormGroup, type: string) {
    this.submitted = true;
    // stop here if form is invalid
    if (form.invalid) {
      return;
    }
    this.submitted = false
    switch (type) {
      case 'emailForm':
        this.formType = 'accountForm'
        break;
      case 'accountForm':
        this.formType = 'detailsForm'
        break;
      case 'detailsForm':
        this.formType = 'successPage'
        break;
    }
    console.log(form.value, 'form value')
  }

  //email form
  get e() { return this.emailForm.controls; }

  //account form
  get a() { return this.accountForm.controls; }

  //details form
  get d() { return this.detailsForm.controls; }

}
