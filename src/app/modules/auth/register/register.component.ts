import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { PasswordStrengthValidator } from 'src/app/_helpers/password-strength.validators';
import { LoaderService } from '../../shared/services/loader.service';
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
  confirmUserForm!: FormGroup
  submitted = false
  formType = 'emailForm'
  toggle: any = {}
  referredByList: { name: string; id: string; }[];
  constructor(private fb: FormBuilder, private staticService: StaticMasterService,
    private loaderService: LoaderService,
    private toastr: ToastrService,
    private auth: AuthService) {
    this.toggle = this.staticService.toggle('register')
    this.referredByList = this.staticService.referredByList
  }

  ngOnInit(): void {
    this.initEmailForm()
    this.initAccountForm()
    this.initDetailsForm()
    this.initConfirmUserForm()
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
      ])],
      middleName: ['', Validators.compose([
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(100)
      ])],
    });
  }

  initConfirmUserForm() {
    this.confirmUserForm = this.fb.group({
      email: [{ value: '', disabled: true }, Validators.compose([
        Validators.required,
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      code: ['', Validators.compose([
        Validators.required,
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

  //form validation and stepper
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
        this.signUpUser()
        break;
    }
  }

  //create user
  async signUpUser() {
    try {
      this.loaderService.isLoading.next(true)
      await this.auth.registrationFlow(this.accountForm.value, this.detailsForm.value, this.e.email.value);
      this.loaderService.isLoading.next(false)
      this.formType = 'confirmUser'
      this.c.email.patchValue(this.e.email.value)
    } catch (err) {
      this.toastr.error(err.message)
      this.loaderService.isLoading.next(false)
      if (err.code == 'UsernameExistsException') {
        return this.resend()
      }
    }
  }

  //confirm user signup
  async confirmUser(form: FormGroup) {
    if (form.invalid) {
      return;
    }
    try {
      this.loaderService.isLoading.next(true)
      await Auth.confirmSignUp(this.e.email.value, this.c.code.value);
      this.loaderService.isLoading.next(false)
      this.formType = 'successPage'
    } catch (err) {
      this.toastr.error(err.message)
      this.loaderService.isLoading.next(false)
    }
  }

  //resend confirmation code
  async resend() {
    try {
      this.loaderService.isLoading.next(true)
      await Auth.resendSignUp(this.e.email.value);
      this.toastr.success('Please check your email')
      this.formType = 'confirmUser'
      this.c.email.patchValue(this.e.email.value)
      this.loaderService.isLoading.next(false)
    } catch (err) {
      this.toastr.error(err.message)
      this.loaderService.isLoading.next(false)
    }
  }

  //email form
  get e() { return this.emailForm.controls; }

  //account form
  get a() { return this.accountForm.controls; }

  //details form
  get d() { return this.detailsForm.controls; }

  //confirm user form
  get c() { return this.confirmUserForm.controls; }

}
