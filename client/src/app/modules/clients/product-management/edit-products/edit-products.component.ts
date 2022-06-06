import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';
import { StaticMasterService } from '../../../shared/services/static-master.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit {

  toggle:any = {}
  constructor(public sharedService: SharedService, public staticService: StaticMasterService) {
    this.toggle = this.staticService.toggle('profile')
  }
  data:any = [1,2,3,4,5,6,7,8,9]
  ngOnInit(): void {
  }

}
