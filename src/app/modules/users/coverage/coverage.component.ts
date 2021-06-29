import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.scss']
})
export class CoverageComponent implements OnInit {

  constructor() { }

  data = [0,1,2,3,4,5,6,7,8,9,10]
  ngOnInit(): void {
  }

}
