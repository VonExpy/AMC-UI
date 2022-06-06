import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StaticMasterService } from '../../shared/services/static-master.service';

@Component({
  selector: 'app-integration-details',
  templateUrl: './integration-details.component.html',
  styleUrls: ['./integration-details.component.scss']
})
export class IntegrationDetailsComponent implements OnInit {
  integrationForm!: FormGroup;
  submitted = false;
  edit: any = false;
  toggle: any = {}
  constructor(private fb: FormBuilder, public staticService: StaticMasterService) { 
    this.toggle = this.staticService.toggle('profile')
  }

  ngOnInit(): void {
    this.initIntegrationForm()
  }

  
  editform() {
    this.edit = !this.edit;
  }

  initIntegrationForm() {
    this.integrationForm = this.fb.group({
      isUCDP:[true],
      isEAD:[false],
      ucdpBusinessNumber: ['1234'],
      freIdNumber: ['4567896'],
      fnmSellerNumber: ['5455454545'],
      eadpBusinessNumber:['1234'],
      fhaIdNumber:['ABCDER']
    });
  }


  get f() { return this.integrationForm.controls; }

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
