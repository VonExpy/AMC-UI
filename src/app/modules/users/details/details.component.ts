import { Component, OnInit } from '@angular/core';
import { StaticMasterService } from '../../shared/services/static-master.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  edit: any = false;
  toggle:any = {}
  constructor(private staticService: StaticMasterService) { 
    this.toggle = this.staticService.toggle('user')
  }

  editform() {
    this.edit = !this.edit;
  }
  ngOnInit(): void {
  }

}
