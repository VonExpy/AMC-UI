import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @ViewChild('slider', { static: false }) mySidenav!: ElementRef
  @ViewChild('viewContainerRef', { static: true, read: ViewContainerRef }) entry!: ViewContainerRef;

  constructor(private sharedService: SharedService,private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.sharedService.customObservable.subscribe((res) => {
      if (res.action == 'open') {
        this.openNav(res)
      } else if (res.action == 'close') {
        this.closeNav()
      }
    }
    );
  }

  closeNav() {
    // this.mySidenav.nativeElement.addClass = "0"
    console.log('close')
    this.mySidenav.nativeElement.classList.add('closepanel');
    this.mySidenav.nativeElement.classList.remove('openpanel');
  }

  openNav(res:any) {
    // this.mySidenav.nativeElement.style.width = res.width
    this.mySidenav.nativeElement.classList.add('openpanel');
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(res.component);
    this.entry.createComponent(factory);
  }
}
