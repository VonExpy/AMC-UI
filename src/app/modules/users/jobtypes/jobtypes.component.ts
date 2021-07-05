import { Component, OnInit } from '@angular/core';
import { StaticMasterService } from '../../shared/services/static-master.service';

@Component({
  selector: 'app-jobtypes',
  templateUrl: './jobtypes.component.html',
  styleUrls: ['./jobtypes.component.scss']
})
export class JobtypesComponent implements OnInit {

  constructor(public staticService:StaticMasterService) { }
  data = [0,1,2,3,4,5,6,7,8,9,10]
  ngOnInit(): void {
  }

}
