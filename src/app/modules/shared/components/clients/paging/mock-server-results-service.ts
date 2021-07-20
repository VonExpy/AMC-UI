import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { PagedData } from './model/paged-data';
import { Page } from './model/page';
import clientData from "src/assets/data/clients.json";
import { clientsModal } from './model/clients.modal';
/**
 * A server used to mock a paged data result from a server
 */
@Injectable()
export class MockServerClientsService {
  /**
   * A method that mocks a paged server response
   * @param page The selected page
   * @returns {any} An observable containing the employee data
   */
  public getResults(page: Page): Observable<PagedData<clientsModal>> {
    console.log(page, 'page')
    return of(clientData)
      .pipe(map(d => this.getPagedData(page)))
      .pipe(delay(1000 * Math.random()));
  }

  /**
   * Package companyData into a PagedData object based on the selected Page
   * @param page The page data used to get the selected data from companyData
   * @returns {PagedData<CorporateEmployee>} An array of the selected data and page
   */
  private getPagedData(page: Page): PagedData<clientsModal> {
    const pagedData = new PagedData<clientsModal>();
    page.totalElements = clientData.length;
    page.totalPages = page.totalElements / page.size;
    const start = page.pageNumber * page.size;
    const end = Math.min(start + page.size, page.totalElements);
    for (let i = start; i < end; i++) {
      const jsonObj = clientData[i];
      const employee = new clientsModal(jsonObj.name, jsonObj.email, jsonObj.phone, jsonObj.created, jsonObj.contactName);
      pagedData.data.push(employee);
    }
    pagedData.page = page;
    return pagedData;
  }
}