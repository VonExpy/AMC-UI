import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @ViewChild('mySidenav', { static: false }) mySidenav!: ElementRef
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.customObservable.subscribe((res) => {
      if (res == 'open') {
        this.openNav()
      } else if (res == 'close') {
        this.closeNav()
      }
    }
    );
  }

  closeNav() {
    this.mySidenav.nativeElement.style.width = "0"
  }

  openNav() {
    this.mySidenav.nativeElement.style.width = "300px"
  }

}
