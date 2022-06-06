import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { PagedData } from './model/paged-data';
import { Page } from './model/page';
import vendorData from "src/assets/data/vendors.json"
import { vendorModal } from './model/vendor.modal';
/**
 * A server used to mock a paged data result from a server
 */
@Injectable()
export class MockServerVendorsService {
  /**
   * A method that mocks a paged server response
   * @param page The selected page
   * @returns {any} An observable containing the employee data
   */
  public getResults(page: Page): Observable<PagedData<vendorModal>> {
    console.log(page,'page')
    return of(vendorData)
      .pipe(map(d => this.getPagedData(page)))
      .pipe(delay(1000 * Math.random()));
  }

  /**
   * Package vendorData into a PagedData object based on the selected Page
   * @param page The page data used to get the selected data from vendorData
   * @returns {PagedData<CorporateEmployee>} An array of the selected data and page
   */
  private getPagedData(page: Page): PagedData<vendorModal> {
    const pagedData = new PagedData<vendorModal>();
    page.totalElements = vendorData.length;
    page.totalPages = page.totalElements / page.size;
    const start = page.pageNumber * page.size;
    const end = Math.min(start + page.size, page.totalElements);
    for (let i = start; i < end; i++) {
      const jsonObj = vendorData[i];
      const employee = new vendorModal(jsonObj.name, jsonObj.email, jsonObj.phone, jsonObj.address);
      pagedData.data.push(employee);
    }
    pagedData.page = page;
    return pagedData;
  }
}