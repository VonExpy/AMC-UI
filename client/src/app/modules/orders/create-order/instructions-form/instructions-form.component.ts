import { Component, Input, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-instructions-form',
  templateUrl: './instructions-form.component.html',
  styleUrls: ['./instructions-form.component.scss']
})
export class InstructionsFormComponent implements OnInit {
  @Input() control: any
  public config: PerfectScrollbarConfigInterface = {};
  constructor() { }

  ngOnInit(): void {
  }

}
