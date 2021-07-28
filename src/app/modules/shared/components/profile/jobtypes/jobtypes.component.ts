import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { StaticMasterService } from '../../../services/static-master.service';
import { AddJobtypeFormComponent } from './add-form/add-form.component';

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
    this.sharedService.sideNav({ action: 'open', component: AddJobtypeFormComponent, width: "500px" });
  }

}
