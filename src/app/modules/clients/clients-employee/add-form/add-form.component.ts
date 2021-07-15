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
  item: any = {}
  constructor(private fb: FormBuilder, public sharedService: SharedService) {
    this.item = this.sharedService.selectedItem
  }

  ngOnInit(): void {
    this.initclientForm()
  }

  initclientForm() {
    this.clientForm = this.fb.group({
      firstName: ['john', Validators.compose([
        Validators.required,
         Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(100),
      ])],
      lastName: ['smith', Validators.compose([
        Validators.required,
         Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(100),
      ]),],
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

  isEmptyObject(obj: object) {
    return Object.keys(obj).length;
  }

}
