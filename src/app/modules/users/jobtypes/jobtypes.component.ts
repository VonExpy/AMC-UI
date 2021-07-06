import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { StaticMasterService } from '../../shared/services/static-master.service';
import { AddFormComponent } from './add-form/add-form.component';

@Component({
  selector: 'app-jobtypes',
  templateUrl: './jobtypes.component.html',
  styleUrls: ['./jobtypes.component.scss']
})
export class JobtypesComponent implements OnInit {

  constructor(public staticService:StaticMasterService,
              private sharedService: SharedService) { }
  data = [0,1,2,3,4,5,6,7,8,9,10]
  ngOnInit(): void {
  }

  openSideNav() {
    this.sharedService.sideNav({ action: 'open', component: AddFormComponent, width: "500px" });
  }

}
