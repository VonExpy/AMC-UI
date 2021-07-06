import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { EditProductsComponent } from './edit-products/edit-products.component';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }

  openSideNav() {
    this.sharedService.sideNav({ action: 'open', component: EditProductsComponent, width: "500px" });
  }

}
