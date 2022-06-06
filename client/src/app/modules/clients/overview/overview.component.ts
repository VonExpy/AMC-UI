import { Component, OnInit } from '@angular/core';
import { StaticMasterService } from '../../shared/services/static-master.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  toggle:any = {}

  constructor(public staticService:StaticMasterService) { }

  ngOnInit(): void {
    this.toggle = this.staticService.toggle('')
  }

}
