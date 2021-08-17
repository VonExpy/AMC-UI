import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-promissory-main',
  templateUrl: './promissory-main.component.html',
  styleUrls: ['./promissory-main.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class PromissoryMainComponent implements OnInit, AfterViewInit {
  customOptions!: OwlOptions
  rangeEvent = 100
  constructor() { }

  ngOnInit(): void {
      this.customOptions = {
        loop: false,
        center: true,
        margin: 0,
        // responsiveClass: true,
        nav: false,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 3,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      }
  }

  ngAfterViewInit(){

  }

  onRangeChange(event:any){
   this.rangeEvent = event.target.value
  }

}
