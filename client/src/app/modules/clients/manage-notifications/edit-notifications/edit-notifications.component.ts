import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-edit-notifications',
  templateUrl: './edit-notifications.component.html',
  styleUrls: ['./edit-notifications.component.scss']
})
export class EditNotificationsComponent implements OnInit {

  constructor( public sharedService:SharedService) { }

  ngOnInit(): void {
  }

}
