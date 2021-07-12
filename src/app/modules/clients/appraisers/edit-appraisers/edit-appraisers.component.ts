import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-appraisers',
  templateUrl: './edit-appraisers.component.html',
  styleUrls: ['./edit-appraisers.component.scss']
})
export class EditAppraisersComponent implements OnInit {
  appraiserCompanies = [{ name: 'BEN ABRAMS', id:1 }, { name: '3-D Appraisal Inc.', id:2 }]
  selected = [1,2]
  appraisalForm!:FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initAppraisalForm()
  }

  initAppraisalForm() {
    this.appraisalForm = this.fb.group({
      appComps: [this.selected, Validators.required]
    });
  }


}
