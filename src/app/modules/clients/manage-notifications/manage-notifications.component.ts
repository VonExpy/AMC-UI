import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { StaticMasterService } from '../../shared/services/static-master.service';
import { EditNotificationsComponent } from './edit-notifications/edit-notifications.component';

@Component({
  selector: 'app-manage-notifications',
  templateUrl: './manage-notifications.component.html',
  styleUrls: ['./manage-notifications.component.scss']
})
export class ManageNotificationsComponent implements OnInit {


  constructor(private sharedService: SharedService, public staticService: StaticMasterService) { }
  toggle:any = {}
  ngOnInit(): void {
    this.toggle = this.staticService.toggle('')
  }

  openSideNav() {
    this.sharedService.sideNav({
      action: 'open', component: EditNotificationsComponent, width: "500px"
    });
  }

}
