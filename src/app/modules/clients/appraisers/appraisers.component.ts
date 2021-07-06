import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { EditAppraisersComponent } from './edit-appraisers/edit-appraisers.component';

@Component({
  selector: 'app-appraisers',
  templateUrl: './appraisers.component.html',
  styleUrls: ['./appraisers.component.scss']
})
export class AppraisersComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }

  openSideNav() {
    this.sharedService.sideNav({ action: 'open', component: EditAppraisersComponent, width: "500px" });
  }

}
