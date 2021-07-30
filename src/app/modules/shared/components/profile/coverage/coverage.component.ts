import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { StaticMasterService } from '../../../services/static-master.service';
import { AddZipcodesComponent } from './add-zipcodes/add-zipcodes.component';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.scss']
})
export class CoverageComponent implements OnInit {

  constructor(private sharedService:SharedService, public staticService:StaticMasterService) { }

  data = [0,1,2,3,4,5,6,7,8,9,10]
  ngOnInit(): void {
  }

  openSideNav() {
    this.sharedService.sideNav({ action: 'open', component: AddZipcodesComponent, width: "500px" });
  }

}
