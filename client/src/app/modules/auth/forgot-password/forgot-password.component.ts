import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PasswordStrengthValidator } from 'src/app/_helpers/password-strength.validators';
import { LoaderService } from '../../shared/services/loader.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  resetForm!: FormGroup
  stepper = false
  submitted = false
  returnUrl!: string;

  constructor(private fb: FormBuilder,
    private router: Router,
    private loaderService: LoaderService,
    private toastr: ToastrService,
    private auth: AuthService) {
    // redirect to dashboard if already logged in
    // console.log(this.auth.currentUserAttributes,'curent user value')
    // if (this.auth.currentUserAttributes) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.initResetForm()
  }


  initResetForm() {
    this.resetForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      code: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        PasswordStrengthValidator
      ])],
    });
  }

  async onSubmit(form: FormGroup) {
    this.submitted = true;
    if (this.f.email.valid && !this.stepper) {
      this.forgotPassword(this.f.email.value)
    }
    // stop here if form is invalid
    if (form.invalid) {
      return;
    }
    this.forgotPasswordSubmit(this.f.email.value, this.f.code.value, this.f.password.value)
  }

  async forgotPassword(email: string) {
    this.loaderService.isLoading.next(true)
    try {
      await this.auth.forgotPassword(email)
      this.toastr.success('Check your email')
      this.loaderService.isLoading.next(false)
      this.submitted = false
      this.stepper = true
    } catch (e) {
      this.loaderService.isLoading.next(false)
      this.toastr.error(e.message)
    }
  }

  async forgotPasswordSubmit(email: string, code: string, password: string) {
    this.loaderService.isLoading.next(true)
    try {
      await this.auth.forgotPasswordSubmit(email, code, password)
      this.toastr.success('Password reset successful!')
      this.loaderService.isLoading.next(false)
      this.router.navigate(['/auth/login'])
    } catch (e) {
      this.loaderService.isLoading.next(false)
      this.toastr.error(e.message)
    }
  }

  get f() { return this.resetForm.controls; }
}
