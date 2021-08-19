import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { StaticMasterService } from '../../shared/services/static-master.service';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @ViewChild('sideToggle', { static: false }) sideToggle!: ElementRef
  @ViewChild('mainToggle', { static: false }) mainToggle!: ElementRef
  constructor(public staticService:StaticMasterService, private sharedService:SharedService) { }
  data: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ngOnInit(): void {
  }
  statistics: boolean = false;
  showstatistics() {
    this.statistics = !this.statistics;
  };

  addUser(){
    this.sharedService.sideNav({ action: 'open', component: CreateUserComponent, width: "lg",size:'lg' });
  }

  toggle(toggle:boolean){
     this.sideToggle.nativeElement.style.maxWidth = toggle ? '0' : '400px';
     this.mainToggle.nativeElement.style.width = toggle ? '100%' : 'calc(100% - 400px)';
  }

 

}
