import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { StaticMasterService } from '../../../services/static-master.service';
import { AddProductsComponent } from './add-products/add-products.component';

@Component({
  selector: 'app-products-vendors',
  templateUrl: './products-vendors.component.html',
  styleUrls: ['./products-vendors.component.scss']
})
export class ProductsVendorsComponent implements OnInit {

  constructor(private sharedService: SharedService,public staticService: StaticMasterService) { }

  ngOnInit(): void {
  }

  openSideNav() {
    this.sharedService.sideNav({ action: 'open', component: AddProductsComponent, width: "500px" });
  }

}
