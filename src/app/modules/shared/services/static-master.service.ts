import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticMasterService {
  public scrollbarOptions = {
    theme: 'dark-3',
    // theme: 'minimal-dark',
    autoHideScrollbar: true,
    scrollButtons: { enable: false }
  };
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
}
