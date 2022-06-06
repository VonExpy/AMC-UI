import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { StaticMasterService } from '../../shared/services/static-master.service';
import { AddFormComponent } from './add-form/add-form.component';

@Component({
  selector: 'app-clients-employee',
  templateUrl: './clients-employee.component.html',
  styleUrls: ['./clients-employee.component.scss']
})
export class ClientsEmployeeComponent implements OnInit {
  data = [{ name: 'John Smith', email: 'johnsmith@domainnam.com', phone: '(345) 234 3456', role: 'General' },
  { name: 'John Doe', email: 'johndoe@domainnam.com', phone: '(345) 224 3456', role: 'General' }]
  toggle: any = {}
  constructor(private sharedService: SharedService, public staticService: StaticMasterService) {
    this.toggle = this.staticService.toggle('profile')
  }

  ngOnInit(): void {
  }

  openSideNav(formAction: any, data: any) {
    this.sharedService.selectedItem = formAction == 'Edit' ? data : {}
    this.sharedService.sideNav({
      action: 'open', width: "500px", formAction, component: AddFormComponent
    });
  }



}
