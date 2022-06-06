import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { PagedData } from './model/paged-data';
import { Page } from './model/page';
import appraiserJson from "src/assets/data/appraisers.json";
import { AppraiserModal } from './model/appraisers.modal';
/**
 * A server used to mock a paged data result from a server
 */
@Injectable()
export class MockServerAppraisersService {
  /**
   * A method that mocks a paged server response
   * @param page The selected page
   * @returns {any} An observable containing the employee data
   */
  public getResults(page: Page): Observable<PagedData<AppraiserModal>> {
    console.log(page,'page')
    return of(appraiserJson)
      .pipe(map(d => this.getPagedData(page)))
      .pipe(delay(1000 * Math.random()));
  }

  /**
   * Package appraiserJson into a PagedData object based on the selected Page
   * @param page The page data used to get the selected data from appraiserJson
   * @returns {PagedData<CorporateEmployee>} An array of the selected data and page
   */
  private getPagedData(page: Page): PagedData<AppraiserModal> {
    const pagedData = new PagedData<AppraiserModal>();
    page.totalElements = appraiserJson.length;
    page.totalPages = page.totalElements / page.size;
    const start = page.pageNumber * page.size;
    const end = Math.min(start + page.size, page.totalElements);
    for (let i = start; i < end; i++) {
      const jsonObj = appraiserJson[i];
      const employee = new AppraiserModal(jsonObj.name, jsonObj.company, jsonObj.email, jsonObj.phone, jsonObj.type, jsonObj.license,jsonObj.licenseNumber,jsonObj.regDate,jsonObj.status);
      pagedData.data.push(employee);
    }
    pagedData.page = page;
    return pagedData;
  }
}