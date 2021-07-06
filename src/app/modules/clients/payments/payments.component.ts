import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { EditPaymentsComponent } from './edit-payments/edit-payments.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }

  openSideNav() {
    this.sharedService.sideNav({ action: 'open', component: EditPaymentsComponent, width: "500px" });
  }

}
