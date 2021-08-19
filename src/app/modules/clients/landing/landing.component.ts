import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StaticMasterService } from '../../shared/services/static-master.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @ViewChild('sideToggle', { static: false }) sideToggle!: ElementRef
  @ViewChild('mainToggle', { static: false }) mainToggle!: ElementRef
  data: any = [1];
  constructor(public staticService:StaticMasterService) { }

  ngOnInit(): void {
  }

  statistics: boolean = false;
  showstatistics() {
    this.statistics = !this.statistics;
  };

  toggle(toggle:boolean){
    this.sideToggle.nativeElement.style.maxWidth = toggle ? '0' : '400px';
    this.mainToggle.nativeElement.style.width = toggle ? '100%' : 'calc(100% - 400px)';
 }

}
