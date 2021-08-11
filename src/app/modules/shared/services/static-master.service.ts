import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticMasterService {
  public scrollbarOptions = {
    theme: 'dark-3',
    autoHideScrollbar: true,
    scrollButtons: { enable: false }
  };
  jobTypes = [
    { "name": "ValueAdd-Exterior", value: 1, index:1 },
    { "name": "ValueAdd-Interior", value: 30, index:2 },
    { "name": "1004P - Interior", value: 31, index:3 },
    { "name": "1004P - Exterior", value: 32 },
    { "name": "1074 FHA W/1007/216", value: 2 },
    { "name": "1075 Condo Exterior", value: 3 },
    { "name": "1075 FHA", value: 4 },
    { "name": "2000A - FIELD REVIEW", value: 5 },
    { "name": "2055 Exterior", value: 6 },
    { "name": "2055 Exterior FHA", value: 7 },
    { "name": "2070 Property Inspection Report", value: 8 },
    { "name": "2075 Property Inspection Report", value: 9 },
    { "name": "2090 Interior CO-OP FHA", value: 10 },
    { "name": "2090 Interior CO-OP W/REO Addendum", value: 11 },
    { "name": "2095-CO-OP", value: 12 },
    { "name": "1073 FHA W/REO Addendum", value: 13 },
    { "name": "216 Operating Income Statement", value: 14 },
    { "name": "CDAIR -DISASTER INSPECTION REPORT", value: 15 },
    { "name": "DESK REVIEW", value: 16 },
    { "name": "Desktop Appraisal", value: 17 },
    { "name": "FHA CONVERSION", value: 18 },
    { "name": "General Purpose Appraisal Report", value: 19 },
    { "name": "LAND ONLY APPRAISAL", value: 20 },
    { "name": "LAND ONLY APPRAISAL W/ REO ADDENDUM", value: 21 },
    { "name": "Narrative Commercial Appraisal", value: 22 },
    { "name": "Other", value: 23 },
    { "name": "Quote/Request for Bid", value: 24 },
    { "name": "Real Estate Value Estimate", value: 25 },
    { "name": "71B Mixed Use", value: 26 },
    { "name": "1073 FHA 230K", value: 27 },
    { "name": "1073 FHA", value: 28 },
    { "name": "1073 Condo W/REO Addendum", value: 29 },
    { "name": "92051", value: 33 },
    { "name": "1004 FHA", value: 34 },
    { "name": "1004 FHA - 203K", value: 35 },
    { "name": "1004 URAR W/216/1007", value: 36 },
    { "name": "1004 FHA W/REO Addendum", value: 37 },
    { "name": "1004 URAR", value: 38 },
    { "name": "1004 URAR W/REO Addendum", value: 39 },
    { "name": "1004 URAR w/1007 Rent Schedule", value: 40 },
    { "name": "1004 C - FHA W/REO Addendum", value: 41 },
    { "name": "1004 C - Manufactured Home", value: 42 },
    { "name": "1004 C - Manufactured Home FHA", value: 43 },
    { "name": "1004 C - Manufactured Home FHA 203K", value: 44 },
    { "name": "1004D Recret Of Value", value: 45 },
    { "name": "1004 D Final Inspection", value: 46 },
    { "name": "1007 Rent Schedule", value: 47 },
    { "name": "1025 Multi-Family", value: 48 },
    { "name": "1025 FHA", value: 49 },
    { "name": "1025 FHA W/REO Addendum", value: 50 },
    { "name": "1025 Multi-Family W/REO Addendum", value: 51 },
    { "name": "1025 Multi-Family W/216", value: 52 },
    { "name": "1025 W/216 FHA", value: 53 },
    { "name": "1073 Condo", value: 54 },
    { "name": "Trip Fee", value: 55 },
    { "name": "USDA - RURAL DEVELOPMENT REPORT", value: 56 }
];
  referredByList = [
    { name: 'Colleague', id: 'Colleague' },
    { name: 'Search Engine', id: 'Search_Engine' },
    { name: 'Email Campaign', id: 'Email_Campaign' },
    { name: 'Facebook', id: 'Facebook' },
    { name: 'Website', id: 'Website' },
    { name: 'AMC', id: 'AMC' },
    { name: 'Others', id: 'Others' }
  ]
  constructor() { }


  toggle(type: string) {
    switch (type) {
      case 'user':
        return {
          value: true,
          name: "test",
          disabled: false,
          height: 25,
          width: 75,
          margin: 2,
          fontSize: 13,
          speed: 300,
          color: {
            checked: "#1B6E3F",
            unchecked: "#cccccc"
          },
          switchColor: {
            checked: "#F8F8F8",
            unchecked: "#F8F8F8"
          },
          labels: {
            unchecked: "",
            checked: "Active"
          },
          checkedLabel: "",
          uncheckedLabel: "",
          fontColor: {
            checked: "#fafafa",
            unchecked: "#ffffff"
          }
        };
      case 'fee':
          return {
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
      case 'yesorno':
            return {
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
      default:
        return {
          value: true,
          name: "test",
          disabled: false,
          height: 18,
          width: 35,
          margin: 1,
          fontSize: 13,
          speed: 300,
          color: {
            checked: "#1B6E3F",
            unchecked: "#cccccc"
          },
          switchColor: {
            checked: "#F8F8F8",
            unchecked: "#F8F8F8"
          },
          labels: {
            unchecked: "",
            checked: ""
          },
          checkedLabel: "",
          uncheckedLabel: "",
          fontColor: {
            checked: "#fafafa",
            unchecked: "#ffffff"
          }
        };
    }

  }

  getUsersByRole(userType:string){
    switch(userType) {
      case 'AD':
        return ['ChiefAppraiser','AppraiserAdmin','AppraiserUser','AppraiserTrainee']
       default :
       return []
    }
  }

  getRole(userType:string){
    switch(userType) {
      case 'AD':
        return 'Chief Appraiser'
      case 'BO':
        return 'Business Owner'
       default :
       return '' 
    }
  }
}
