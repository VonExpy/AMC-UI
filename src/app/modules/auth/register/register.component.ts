import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CognitoUser, CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { PasswordStrengthValidator } from 'src/app/_helpers/password-strength.validators';
import { environment } from 'src/environments/environment';
import { LoaderService } from '../../shared/services/loader.service';
import { StaticMasterService } from '../../shared/services/static-master.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registeredUser!: CognitoUser;
  emailForm!: FormGroup
  accountForm!: FormGroup
  detailsForm!: FormGroup
  submitted = false
  formType = 'emailForm'
  toggle: any = {}
  referredByList: { name: string; id: string; }[];
  constructor(private fb: FormBuilder,
    private staticService: StaticMasterService,
    private auth:AuthService,
    private toastr: ToastrService,
    private loaderService: LoaderService) {
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
        this.signUpUser()
        break;
    }
    // console.log(form.value, 'form value')
  }

  signUpUser() {
    this.loaderService.isLoading.next(true)
    const attrList: CognitoUserAttribute[] = [];
    const emailAttribute = {
      Name: 'email',
      Value: this.e.email.value
    };
    attrList.push(new CognitoUserAttribute(emailAttribute));
    this.auth.userPool.signUp(this.e.email.value, this.d.password.value, attrList, null!, (err, result: any) => {
      if (err) {
        this.toastr.error('Error', 'Something went wrong!')
        this.loaderService.isLoading.next(false)
        return;
      }
      // this.authDidFail.next(false);
      this.loaderService.isLoading.next(false)
      this.registeredUser = result.user;
      this.formType = 'successPage'
      // this.toastr.success('Successfully Registered', 'Please check your email for confirmation')
      // this.router.navigate(['/auth/login'])
    });
  }

  //email form
  get e() { return this.emailForm.controls; }

  //account form
  get a() { return this.accountForm.controls; }

  //details form
  get d() { return this.detailsForm.controls; }

}
