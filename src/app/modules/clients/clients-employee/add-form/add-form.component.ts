import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  clientForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.initclientForm()
  }

  initclientForm() {
    this.clientForm = this.fb.group({
      firstName: ['john', Validators.required],
      lastName: ['smith', Validators.required],
      accountType: ['General', Validators.required],
      email: ['test@gmail.com', Validators.compose([
        Validators.required,
        Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")
      ])],
      phone: ['', Validators.required],
    });
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
