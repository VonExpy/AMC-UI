import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { AddProductsComponent } from './add-products/add-products.component';

@Component({
  selector: 'app-products-vendors',
  templateUrl: './products-vendors.component.html',
  styleUrls: ['./products-vendors.component.scss']
})
export class ProductsVendorsComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  openSideNav() {
    this.sharedService.sideNav({ action: 'open', component: AddProductsComponent, width: "500px" });
  }

}
