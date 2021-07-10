import { Component, OnInit } from '@angular/core';
import { StaticMasterService } from 'src/app/modules/shared/services/static-master.service';

@Component({
  selector: 'app-add-notes-reminders',
  templateUrl: './add-notes-reminders.component.html',
  styleUrls: ['./add-notes-reminders.component.scss']
})
export class AddNotesRemindersComponent implements OnInit {

  toggle: any = {}
  constructor(private staticService: StaticMasterService) { 
    this.toggle = this.staticService.toggle('')
  }

  ngOnInit(): void {
  }

}
