import { Component, OnInit } from '@angular/core';
import { StaticMasterService } from 'src/app/modules/shared/services/static-master.service';

@Component({
  selector: 'app-edit-payments',
  templateUrl: './edit-payments.component.html',
  styleUrls: ['./edit-payments.component.scss']
})
export class EditPaymentsComponent implements OnInit {
  options = [{ label: 'Invoice', value: false }, { label: 'Paper Check', value: false }, { label: 'Credit Card', value: true }]
  toggle: any = {}
  constructor(private staticService: StaticMasterService) { 
    this.toggle = this.staticService.toggle('profile')
  }

  ngOnInit(): void {
  }

}
