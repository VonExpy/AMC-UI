import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaticMasterService } from '../../shared/services/static-master.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  clientForm!: FormGroup;
  submitted = false;
  edit: any = false;
  toggle: any = {}
  constructor(private fb: FormBuilder, public staticService: StaticMasterService) {
    this.toggle = this.staticService.toggle('profile')
  }


  ngOnInit(): void {
    this.initClientForm()
  }

  editform() {
    this.edit = !this.edit;
  }

  initClientForm() {
    this.clientForm = this.fb.group({
      name: ['Seattle Mortgage Inc', Validators.required],
      type: ['Lender'],
      status: ['Active'],
      phone: ['(435) 435-3454', Validators.required],
      fax: ['(345) 435-3454', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      county: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      appraisalDelEmail: ['mlwojcik@yahoo.com', Validators.compose([
        Validators.required,
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      completedAppEmail: ['', Validators.compose([
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      completedAppEmailTwo: ['', Validators.compose([
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      amcManger: ['', Validators.required],
      contactPerson: [''],
    });
  }



  //google auto complete address
  getAddress(address: any) {
    this.clientForm.patchValue({
      street: address.street,
      city: address.city,
      county: address.county,
      state: address.state,
      zipcode: address.zipcode
    })
  }

  get f() { return this.clientForm.controls; }

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
