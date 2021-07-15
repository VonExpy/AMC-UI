import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/modules/shared/services/shared.service';
import { StaticMasterService } from '../../../shared/services/static-master.service';
import { LoaderService } from '../../../shared/services/loader.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  feeForm!: FormGroup;
  submitted = false;
  edit: any = true;
  toggle: any = {}
  constructor(private loaderService: LoaderService, public staticService: StaticMasterService, public sharedService: SharedService, private fb: FormBuilder) {
    this.toggle = this.staticService.toggle('yesorno')
  }

  ngOnInit(): void {
    this.initFeeStructureForm();
    this.loaderService.isLoading.next(true);
    setTimeout(() => {
      this.loaderService.isLoading.next(false);
    }, 1000)
  }

  editform() {
    this.edit = !this.edit;
  }

  initFeeStructureForm() {
    this.feeForm = this.fb.group({
      jobtype: [null, Validators.required],
      isActive:[true],
      appraiserFee:[''],
      companyFee:['']

    });
  }

  get f() { return this.feeForm.controls; }

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
