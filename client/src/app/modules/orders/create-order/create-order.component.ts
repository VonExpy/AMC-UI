import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateOrderComponent implements OnInit {
  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  formType = 'addressForm'
  orderForm: any
  constructor(
    private sharedService: SharedService,
    private el: ElementRef,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initOrderForm()
  }

  initOrderForm() {
    this.orderForm = this.fb.group({
      addressForm: this.addressForm(),
      orderInfo: this.orderInfoForm(),
      instructionsForm: this.instructionsFrom(),
      documentsForm: this.documentsForm()
    })
  }

  addressForm() {
    return this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      county: [''],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required]
    })
  }

  orderInfoForm() {
    return this.fb.group({
      clientName: ['', Validators.required],
      clientEmail: ['', Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")],
      lenderType: [''],
      lenderName: [''],
      street: [''],
      city: [''],
      county: [''],
      state: [''],
      zipcode: [''],
      borrowerName: [''],
      borrowerPhone: [''],
      borrowerEmail: ['', Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")],
      coBorrowerName: [''],
      coBorrowerPhone: [''],
      coBorrowerEmail: ['', Validators.pattern("\\b[\\w.%-]+@[-.\\w]+\\.[A-Za-z]{2,4}\\b")],
      jobtype: [''],
      assignmentType: [''],
      propertyType: [''],
      purchasePrice: [''],
      fhaFileNumber: [''],
      loanType: [''],
      loanNumber: [''],
      currentFile: [''],
      case: [''],
      legal: ['']
    })
  }

  instructionsFrom() {
    return this.fb.group({
      instructions: ['']
    })
  }

  documentsForm() {
    return this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      county: [''],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required]
    })
  }

  //form validation and stepper
  async onSubmit(form: FormGroup, type: string) {
    // // stop here if form is invalid
    if (form.invalid) {
      form.markAllAsTouched()
      return this.sharedService.scrollToFirstInvalidControl(this.el, this.componentRef);
    }
    switch (type) {
      case 'addressForm':
        this.formType = 'orderForm'
        break;
      case 'orderInfo':
        this.formType = 'instructionsForm'
        break;
      case 'instructionsForm':
        this.formType = 'documentsForm'
        break;
      case 'documentsForm':
        this.formType = 'reviewForm'
        break;
      // case 'detailsForm':
      //   this.signUpUser()
      //   break;
    }
  }



}
