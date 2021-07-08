import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { StaticMasterService } from '../../shared/services/static-master.service';
import { EditPaymentsComponent } from './edit-payments/edit-payments.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  data = [
    { status: 'New', due: '$ 270.00', invoiceNumber: '12345679', amountDue: 899 },
    { status: 'New', due: '$ 260.00', invoiceNumber: '12385679', amountDue: 489 },
    { status: 'New', due: '$ 250.00', invoiceNumber: '12348979', amountDue: 898 },
  ]
  options = [{ label: 'Invoice', value: false }, { label: 'Paper Check', value: false }, { label: 'Credit Card', value: true }]
  toggle: any = {}
  constructor(private sharedService: SharedService, public staticService: StaticMasterService) {
    this.toggle = this.staticService.toggle('profile')
  }

  ngOnInit(): void {
  }

  openSideNav() {
    this.sharedService.sideNav({ action: 'open', component: EditPaymentsComponent, width: "500px" });
  }

}
