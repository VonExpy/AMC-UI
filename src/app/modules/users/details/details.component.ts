import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }
  edit: any = false;
  editform() {
    this.edit = !this.edit;
  }
  ngOnInit(): void {
  }
  config = {
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
  toggle = {
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
  public scrollbarOptions = {
    theme: 'dark-3',
    // theme: 'minimal-dark',
    autoHideScrollbar: true,
    scrollButtons: { enable: false }
  };
  public scrollbarOptionsx = {
    // theme: 'dark-3',
    theme: 'minimal-dark',
    autoHideScrollbar: true,
    scrollButtons: { enable: false }
  };

  
  myCallback = (e: any) => {
    console.log(e)
  }
}
