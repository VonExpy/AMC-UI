import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { ToastrService } from 'ngx-toastr';
// import { first } from 'rxjs/operators';
import { LoaderService } from '../../shared/services/loader.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  stepper = false;
  submitted = false;
  returnUrl!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loaderService: LoaderService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private auth: AuthService
  ) {
    // redirect to dashboard if already logged in
    // console.log(this.auth.currentUserAttributes,'curent user value')
    // if (this.auth.currentUserAttributes) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.initLoginForm();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: [
        'santhoshca@yopmail.com',
        Validators.compose([
          Validators.required,
          Validators.pattern('\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b'),
        ]),
      ],
      password: [
        'India@123',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  async onSubmit(form: FormGroup) {
    this.submitted = true;
    if (this.f.email.valid) {
      this.stepper = true;
    }
    // stop here if form is invalid
    if (form.invalid) {
      return;
    }

    try {
      this.loaderService.isLoading.next(true);
      const currentUser = await this.auth.signIn(
        this.f.email.value,
        this.f.password.value
      );
      this.toastr.success(
        'Login Successful',
        `Hi ${currentUser.attributes.name}`
      );
      // if(currentUser.attributes['custom:user_type'] == 'BORROWER'){
      //   return this.router.navigate(['/promissory']);
      // }
      this.router.navigate([this.returnUrl]);
    } catch (e: any) {
      this.toastr.error(e.message);
      this.loaderService.isLoading.next(false);
    }
  }

  get f() {
    return this.loginForm.controls;
  }
}
