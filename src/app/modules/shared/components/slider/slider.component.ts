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
        this.openNav(res.component)
      } else if (res.action == 'close') {
        this.closeNav()
      }
    }
    );
  }

  closeNav() {
    this.mySidenav.nativeElement.style.width = "0"
  }

  openNav(component:any) {
    this.mySidenav.nativeElement.style.width = "300px"
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(component);
    this.entry.createComponent(factory);
  }
}
