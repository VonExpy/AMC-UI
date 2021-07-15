import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-add-zipcodes',
  templateUrl: './add-zipcodes.component.html',
  styleUrls: ['./add-zipcodes.component.scss']
})
export class AddZipcodesComponent implements OnInit {

  constructor(public sharedService:SharedService) { }

  ngOnInit(): void {
  }

}
