import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { AddFormComponent } from './add-form/add-form.component';

@Component({
  selector: 'app-clients-employee',
  templateUrl: './clients-employee.component.html',
  styleUrls: ['./clients-employee.component.scss']
})
export class ClientsEmployeeComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }

  openSideNav() {
    this.sharedService.sideNav({ action: 'open', component: AddFormComponent, width: "500px" });
  }

}
