import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { LoaderService } from '../../shared/services/loader.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  stepper = false
  submitted = false
  returnUrl!: string;

  constructor(private fb: FormBuilder,
    private router: Router,
    private loaderService: LoaderService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private auth: AuthService) {
    // redirect to dashboard if already logged in
    if (this.auth.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.initLoginForm()
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
    });
  }

  get f() { return this.loginForm.controls; }


  onSubmit(form: FormGroup) {
    this.submitted = true;
    if (this.f.email.valid) {
      this.stepper = true
    }
    // stop here if form is invalid
    if (form.invalid) {
      return;
    }
    console.log('hit')
    this.auth.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.toastr.success('Success', `Hi ${data.user123}`)
          this.router.navigate([this.returnUrl]);
        },
        error => {
          // this.error = error;
          this.toastr.error(error)
        });
  }

}
