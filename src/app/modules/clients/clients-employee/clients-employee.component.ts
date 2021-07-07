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
  data = [0, 1, 2]
  toggle: any = {}
  constructor(private sharedService: SharedService, public staticService: StaticMasterService) {
    this.toggle = this.staticService.toggle('profile')
  }

  ngOnInit(): void {
  }

  openSideNav(formAction: any, data: any) {
    this.sharedService.sideNav({
      action: 'open', component: AddFormComponent, width: "500px", formAction, data: formAction == 'Edit' ?
        data : ''
    });
  }

}
