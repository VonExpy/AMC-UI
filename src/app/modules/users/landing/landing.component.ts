import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }
  data: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  scrollbarOptions: any;
  ngOnInit(): void {
    this.scrollbarOptions = {
      theme: 'dark-3',
      // theme: 'minimal-dark',
      autoHideScrollbar: true,
      scrollButtons: { enable: false }
    };
  }
  scrollButtons = { enable: false }
  statistics: boolean = false;
  showstatistics() {
    this.statistics = !this.statistics;
  };
}
