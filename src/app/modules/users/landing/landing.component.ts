import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }
  data: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ngOnInit(): void {
    console.log(this.data)
  }

}
