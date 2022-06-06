import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { StaticMasterService } from '../../shared/services/static-master.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  edit: any = false;
  toggle:any = {}
  @Output() onToggle = new EventEmitter<any>()
  isActive:boolean = false
  constructor(private staticService: StaticMasterService) { 
    this.toggle = this.staticService.toggle('user')
  }

  editform() {
    this.edit = !this.edit;
  }
  ngOnInit(): void {
  }

  onChange(event:any){
    this.onToggle.emit(event.target.checked)
  }

}