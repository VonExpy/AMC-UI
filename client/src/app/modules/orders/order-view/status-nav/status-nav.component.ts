import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { StaticMasterService } from '../../../shared/services/static-master.service';

@Component({
  selector: 'app-status-nav',
  templateUrl: './status-nav.component.html',
  styleUrls: ['./status-nav.component.scss'],
})
export class StatusNavComponent implements OnInit {
  toggle: any = {};
  @Output() onToggle = new EventEmitter<any>();
  isActive: boolean = false;
  constructor(private staticService: StaticMasterService) {
    this.toggle = this.staticService.toggle('');
  }

  ngOnInit(): void {}
}
