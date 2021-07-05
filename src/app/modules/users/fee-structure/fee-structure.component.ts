import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { StaticMasterService } from '../../shared/services/static-master.service';
import { AddFormComponent } from './add-form/add-form.component';

@Component({
  selector: 'app-fee-structure',
  templateUrl: './fee-structure.component.html',
  styleUrls: ['./fee-structure.component.scss']
})
export class FeeStructureComponent implements OnInit {
  toggle: any = {}
  constructor(private sharedService: SharedService, public staticService: StaticMasterService) {
    this.toggle = this.staticService.toggle('fee')
  }
  data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  ngOnInit(): void {
  }

  openSideNav() {
    this.sharedService.sideNav({ action: 'open', component: AddFormComponent, width: "500px" });
  }

  openModal() {
    this.sharedService.modal({ action: 'open', component: AddFormComponent, size: 'sm', heading: 'Sample Heading' })
  }
}
