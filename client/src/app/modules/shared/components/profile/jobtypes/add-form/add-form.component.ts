import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/modules/shared/services/shared.service';
import { StaticMasterService } from 'src/app/modules/shared/services/static-master.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddJobtypeFormComponent implements OnInit {
  jobtypeForm!: FormGroup;
  submitted = false;
  constructor(public staticService: StaticMasterService, private fb: FormBuilder,
    public sharedService:SharedService) { }

  ngOnInit(): void {
    this.initJobTypeForm()
  }

  initJobTypeForm() {
    this.jobtypeForm = this.fb.group({
      jobtype: [null, Validators.compose([
        Validators.required
      ])],
      fee: [''],
      notes: ['', Validators.compose([
        Validators.maxLength(200)
      ])]
    });
  }

  get f() { return this.jobtypeForm.controls; }

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
