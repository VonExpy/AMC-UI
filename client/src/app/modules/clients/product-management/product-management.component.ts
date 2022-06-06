import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { StaticMasterService } from '../../shared/services/static-master.service';
import { EditProductsComponent } from './edit-products/edit-products.component';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {
  data = [
    { name: 'ValueAdd-Exterior', instruction: 'Lorem ipsum, dolor sit amet consectetur adipisicing.', opt: true },
    { name: 'ValueAdd-Interior', instruction: 'Lorem ipsum, dolor sit amet consectetur adipisicing.', opt: false }
  ]
  toggle: any = {}
  constructor(private sharedService: SharedService, public staticService: StaticMasterService) {
    this.toggle = this.staticService.toggle('profile')
  } 

  ngOnInit(): void {
  }

  openSideNav() {
    this.sharedService.sideNav({ action: 'open', component: EditProductsComponent, width: "500px" });
  }

}
