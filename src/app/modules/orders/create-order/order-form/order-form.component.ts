import { Component, Input, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { StaticMasterService } from 'src/app/modules/shared/services/static-master.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  @Input() control:any
  toggle: any = {}
  constructor(private staticsService: StaticMasterService) {
    this.toggle = this.staticsService.toggle('profile')
   }

  ngOnInit(): void {
  }

  get f() { return this.control.controls; }

}
