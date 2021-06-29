import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-structure',
  templateUrl: './fee-structure.component.html',
  styleUrls: ['./fee-structure.component.scss']
})
export class FeeStructureComponent implements OnInit {

  constructor() { }
  data = [0,1,2,3,4,5,6,7,8,9,10]

  ngOnInit(): void {
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
}
