import { Component, OnInit } from '@angular/core';
import { StaticMasterService } from '../../shared/services/static-master.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public staticService:StaticMasterService) { }
  data: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ngOnInit(): void {
  }
  statistics: boolean = false;
  showstatistics() {
    this.statistics = !this.statistics;
  };
}
