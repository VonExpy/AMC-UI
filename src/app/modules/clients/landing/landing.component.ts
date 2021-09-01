import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { StaticMasterService } from '../../shared/services/static-master.service';
import { CreateClientComponent } from '../create-client/create-client.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @ViewChild('sideToggle', { static: false }) sideToggle!: ElementRef
  @ViewChild('mainToggle', { static: false }) mainToggle!: ElementRef
  data: any = [1];
  constructor(public staticService:StaticMasterService,
    private sharedService:SharedService) { }

  ngOnInit(): void {
  }

  statistics: boolean = false;
  showstatistics() {
    this.statistics = !this.statistics;
  };

  addClient(){
    this.sharedService.sideNav({ action: 'open', component: CreateClientComponent, width: "lg",size:'lg' });
  }

  toggle(toggle:boolean){
    this.sideToggle.nativeElement.style.maxWidth = toggle ? '0' : '400px';
    this.mainToggle.nativeElement.style.width = toggle ? '100%' : 'calc(100% - 400px)';
 }

}
