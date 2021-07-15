import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../shared/services/shared.service';
import { StaticMasterService } from '../../shared/services/static-master.service';
import { CoverageComponent } from '../coverage/coverage.component';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {
  accountTypes = [
    { name: 'Current', id: '1' },
    { name: 'Savings', id: '2' }
  ]
  constructor(private fb: FormBuilder, public staticService: StaticMasterService, private cd: ChangeDetectorRef) { }
  orgForm!: FormGroup;
  submitted = false;
  edit: any = false;
  ngOnInit(): void {
    this.initOrgForm()
  }

  editform() {
    this.edit = !this.edit;
  }

  initOrgForm() {
    this.orgForm = this.fb.group({
      orgName: ['Vonexpy Softech LLC', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ])],
      email: ['test@gmail.com', Validators.compose([
        Validators.required,
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      fax: ['', Validators.required],
      ein: ['', Validators.required],
      phone: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      county: [''],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      contactName: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ])],
      contactPhone: ['', Validators.required],
      contactEmail: ['', Validators.compose([
        Validators.required,
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      bankDetails: new FormArray([this.bankDetailsForm()])
    });
  }

  // initialization of bankDetails
  bankDetailsForm() {
    return this.fb.group({
      accountType: [null, Validators.required],
      bankName: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ])],
      routingNumber: ['', Validators.required],
      accountNumber: ['', Validators.required]
    })
  }

  // Add new form
  add() {
    this.t.push(this.bankDetailsForm())
  }

  delete(i: number) {
    this.t.removeAt(i)
  }

  // this.t.removeAt(i);

  //google auto complete address
  getAddress(address: any) {
    this.orgForm.patchValue({
      street: address.street,
      city: address.city,
      county: address.county,
      state: address.state,
      zipcode: address.zipcode
    })
    this.cd.detectChanges()
  }

  get f() { return this.orgForm.controls; }
  get t() { return this.f.bankDetails as FormArray; }

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
