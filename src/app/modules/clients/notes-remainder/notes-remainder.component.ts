import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { StaticMasterService } from '../../shared/services/static-master.service';
import { AddNotesRemindersComponent } from './add-notes-reminders/add-notes-reminders.component';

@Component({
  selector: 'app-notes-remainder',
  templateUrl: './notes-remainder.component.html',
  styleUrls: ['./notes-remainder.component.scss']
})
export class NotesRemainderComponent implements OnInit {

  constructor(private sharedService: SharedService, public staticService: StaticMasterService) { }

  ngOnInit(): void {
  }

  openSideNav() {
    this.sharedService.sideNav({
      action: 'open', component: AddNotesRemindersComponent, width: "500px"
    });
  }

}
