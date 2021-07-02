import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { MockServerResultsService } from './paging/mock-server-results-service';
import { orderModal } from './paging/model/order.modal';
import { Page } from './paging/model/page';
 
interface PageInfo {
  offset: number;
  pageSize: number;
  limit: number;
  count: number;
}
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  totalElements!: number;
  pageNumber: number;
  rows!: orderModal[];
  cache: any = {};

  ColumnMode = ColumnMode;

  isLoading = 0;

  constructor(private serverResultsService: MockServerResultsService) {
    this.pageNumber = 0;
  }

  ngOnInit(){

  }

  setPage(pageInfo: PageInfo) {
    // Current page number is determined by last call to setPage
    // This is the page the UI is currently displaying
    // The current page is based on the UI pagesize and scroll position
    // Pagesize can change depending on browser size
    this.pageNumber = pageInfo.offset;

    // Calculate row offset in the UI using pageInfo
    // This is the scroll position in rows
    const rowOffset = pageInfo.offset * pageInfo.pageSize;

    // When calling the server, we keep page size fixed
    // This should be the max UI pagesize or larger
    // This is not necessary but helps simplify caching since the UI page size can change
    const page = new Page();
    page.size = 20;
    page.pageNumber = Math.floor(rowOffset / page.size);

    // We keep a index of server loaded pages so we don't load same data twice
    // This is based on the server page not the UI
    if (this.cache[page.pageNumber]) return;
    this.cache[page.pageNumber] = true;

    // Counter of pending API calls
    this.isLoading++;

    this.serverResultsService.getResults(page).subscribe(pagedData => {
      console.log(pagedData,'pagedata')
      // Update total count
      this.totalElements = pagedData.page.totalElements;

      // Create array to store data if missing
      // The array should have the correct number of with "holes" for missing data
      if (!this.rows) {
        this.rows = new Array<orderModal>(this.totalElements || 0);
      }

      // Calc starting row offset
      // This is the position to insert the new data
      const start = pagedData.page.pageNumber * pagedData.page.size;

      // Copy existing data
      const rows = [...this.rows];

      // Insert new rows into correct position
      rows.splice(start, pagedData.page.size, ...pagedData.data);

      // Set rows to our new rows for display
      this.rows = rows;

      // Decrement the counter of pending API calls
      this.isLoading--;
    });
  }

  toggle = {
    value: true,
    name: "test",
    disabled: false,
    height: 24,
    width: 55,
    margin: 1,
    fontSize: 12,
    speed: 300,
    color: {
      checked: "#1B6E3F",
      unchecked: "#A4BBC1"
    },
    switchColor: {
      checked: "#F8F8F8",
      unchecked: "#F8F8F8"
    },
    labels: {
      unchecked: "No",
      checked: "Yes"
    },
    checkedLabel: "",
    uncheckedLabel: "",
    fontColor: {
      checked: "#fafafa",
      unchecked: "#ffffff"
    }
  };
  
  public scrollbarOptions = {
    theme: 'dark-3',
    // theme: 'minimal-dark',
    autoHideScrollbar: true,
    scrollButtons: { enable: false }
  };
}
