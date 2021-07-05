import { Component, OnInit } from '@angular/core';
import { StaticMasterService } from '../../shared/services/static-master.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  data: any = [1];
  constructor(public staticService:StaticMasterService) { }

  ngOnInit(): void {
  }

  statistics: boolean = false;
  showstatistics() {
    this.statistics = !this.statistics;
  };

}
