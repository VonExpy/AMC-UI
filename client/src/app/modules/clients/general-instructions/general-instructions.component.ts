import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { StaticMasterService } from '../../shared/services/static-master.service';
import { UpdateInstructionsComponent } from './update-instructions/update-instructions.component';

@Component({
  selector: 'app-general-instructions',
  templateUrl: './general-instructions.component.html',
  styleUrls: ['./general-instructions.component.scss']
})
export class GeneralInstructionsComponent implements OnInit {

  constructor(private sharedService: SharedService, public staticService: StaticMasterService) { }

  ngOnInit(): void {
  }

  openSideNav() {
    this.sharedService.sideNav({
      action: 'open', component: UpdateInstructionsComponent, width: "500px"
    });
  }

}
