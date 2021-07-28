import { Component, OnInit } from '@angular/core';
import { StaticMasterService } from '../shared/services/static-master.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  edit: any = false;
  toggle: any = {}
  constructor(private staticService: StaticMasterService) {
    this.toggle = this.staticService.toggle('user')
  }

  editform() {
    this.edit = !this.edit;
  }
  ngOnInit(): void {
  }


  public scrollbarOptions = {
    axis: "X",
  }


}
