import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { PasswordStrengthValidator } from 'src/app/_helpers/password-strength.validators';
import { StaticMasterService } from '../../shared/services/static-master.service';
import { AuthService } from '../services/auth.service';

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
  toggle:any = {}
  referredByList: { name: string; id: string; }[];
  constructor(private fb: FormBuilder, private staticService:StaticMasterService,
    private auth:AuthService) { 
    this.toggle = this.staticService.toggle('register')
    this.referredByList = this.staticService.referredByList
  }

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
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(100)
      ])],
      lastName: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(100)
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
      referredBy: [null, Validators.compose([
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

  async onSubmit(form: FormGroup, type: string) {
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
        const registrationSubscr = await this.auth.registrationFlow(this.detailsForm.value);
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
