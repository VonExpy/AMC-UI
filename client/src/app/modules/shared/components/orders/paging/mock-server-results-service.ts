import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { PagedData } from './model/paged-data';
import { Page } from './model/page';
import companyData from "src/assets/data/orders.json";
import { orderModal } from './model/order.modal';
/**
 * A server used to mock a paged data result from a server
 */
@Injectable()
export class MockServerResultsService {
  /**
   * A method that mocks a paged server response
   * @param page The selected page
   * @returns {any} An observable containing the employee data
   */
  public getResults(page: Page): Observable<PagedData<orderModal>> {
    console.log(page,'page')
    return of(companyData)
      .pipe(map(d => this.getPagedData(page)))
      .pipe(delay(1000 * Math.random()));
  }

  /**
   * Package companyData into a PagedData object based on the selected Page
   * @param page The page data used to get the selected data from companyData
   * @returns {PagedData<CorporateEmployee>} An array of the selected data and page
   */
  private getPagedData(page: Page): PagedData<orderModal> {
    const pagedData = new PagedData<orderModal>();
    page.totalElements = companyData.length;
    page.totalPages = page.totalElements / page.size;
    const start = page.pageNumber * page.size;
    const end = Math.min(start + page.size, page.totalElements);
    for (let i = start; i < end; i++) {
      const jsonObj = companyData[i];
      const employee = new orderModal(jsonObj.file, jsonObj.address, jsonObj.jobtype, jsonObj.dueDate, jsonObj.client, jsonObj.status);
      pagedData.data.push(employee);
    }
    pagedData.page = page;
    return pagedData;
  }
}