import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobtypes',
  templateUrl: './jobtypes.component.html',
  styleUrls: ['./jobtypes.component.scss']
})
export class JobtypesComponent implements OnInit {

  constructor() { }
  data = [0,1,2,3,4,5,6,7,8,9,10]
  ngOnInit(): void {
  }

}
