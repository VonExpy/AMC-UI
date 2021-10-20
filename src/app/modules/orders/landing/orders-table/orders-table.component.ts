import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import companyData from "src/assets/data/orders.json";

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent {
  @ViewChild('myTable') table: any;
  SelectionType = SelectionType;
  rows: any[] = [];
  expanded: any = {};
  timeout: any;

  ColumnMode = ColumnMode;

  constructor(private router: Router) {
    this.rows = companyData;
  }

  onPage(event: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  toggleExpandRow(row: any,event:any) {
    console.log('Toggled Expand Row!', row);
    event.stopPropagation();
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event: any) {
    console.log('Detail Toggled', event);
  }

  onActivate(event: any) {
    console.log(event.type)
    if (event.type === 'checkbox') {
      //Stop event propagation and let onSelect() work
      console.log('Checkbox Selected', event);
      event.event.stopPropagation();
    } else if (event.type === 'click') {
      //Do somethings when you click on row cell other than checkbox
      console.log('Row Clicked', event.row); /// <--- object is in the event row variable
      this.router.navigate(['/orders/view/order-summary'])
    }
  }

}

