import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromissoryService {

  constructor() { }

  promissory(type: string) {
    switch (type) {
      case 'loan':
        return [
          { name: 'Purchase', img: '../../../../assets/promissory/icon_purchase.png' },
          { name: 'Refinance', img: '../../../../assets/promissory/icon_refinance.png' },
          { name: 'Home Equity', img: '../../../../assets/promissory/icon_homeequity.png' },
          { name: 'Reverse Mortgage', img: '../../../../assets/promissory/icon_reversemortgage.png' }
        ]
      case 'property':
        return [
          { name: 'Primary Home', img: '../../../../assets/promissory/icon_purchase.png' },
          { name: 'Secondary Home', img: '../../../../assets/promissory/icon_refinance.png' },
          { name: 'Rental Property', img: '../../../../assets/promissory/icon_homeequity.png' }
        ]
      case 'payment':
        return [
          { name: 'Lower my monthly payment' },
          { name: 'Pay off my mortgage faster' },
          { name: ' Take cash out of home' },
          { name: 'Change my ARM loan to Fixed' },
          { name: 'Browse current mortgage rates' }
        ]
    }
  }
}
