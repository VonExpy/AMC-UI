import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, 
              private router:Router,
              private auth:AuthService) { }

  ngOnInit(): void {
    this.initLoginForm()
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
    this.auth.isLoggedIn = true
    this.router.navigate(['dashboard'])
    console.log(form.value, 'form value')
  }

}
