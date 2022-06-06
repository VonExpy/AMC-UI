import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-update-instructions',
  templateUrl: './update-instructions.component.html',
  styleUrls: ['./update-instructions.component.scss']
})
export class UpdateInstructionsComponent implements OnInit {

  constructor(public sharedService:SharedService) { }

  ngOnInit(): void {
  }

}
