import { Component, OnInit } from '@angular/core';
import { StaticMasterService } from 'src/app/modules/shared/services/static-master.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddJobtypeFormComponent implements OnInit {
  constructor(public staticService:StaticMasterService) { }

  ngOnInit(): void {
  }

}
