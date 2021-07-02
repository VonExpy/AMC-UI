import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  data = [0,1,2,3,4,5,6,7,8,9,10]
  ngOnInit(): void {
  }

  public scrollbarOptions = {
    theme: 'dark-3',
    autoHideScrollbar: true,
    scrollButtons: { enable: false }
  };
}
