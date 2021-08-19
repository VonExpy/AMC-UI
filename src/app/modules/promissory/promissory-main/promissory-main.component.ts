import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';
import { PromissoryService } from '../../shared/services/promissory.service';
@Component({
  selector: 'app-promissory-main',
  templateUrl: './promissory-main.component.html',
  styleUrls: ['./promissory-main.component.scss']
})

export class PromissoryMainComponent implements OnInit, AfterViewInit {
  customOptions!: OwlOptions
  rangeEvent = 100
  promissory:any = {}
  model:any = {}
  constructor(public prmsSc:PromissoryService, private cd:ChangeDetectorRef,
    private http:HttpClient) {
     this.promissory.loans = this.prmsSc.promissory('loan')
     this.promissory.properties = this.prmsSc.promissory('property')
     this.promissory.payments = this.prmsSc.promissory('payment')
   }

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

    //google auto complete address
    getAddress(address: any) {
      this.model.street = address.street
      this.model.zipcode = address.zipcode
      this.model.city = address.city
      this.cd.detectChanges()
    }

    async callGeoAPI(code:string){
      if(code.length >= 5){
      let apiURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${code}&key=${environment.GOOGLE_MAP_API_KEY}`;
      const result:any = await this.http.get(apiURL).toPromise()
      console.log(result,'result')
      this.model.zipAddress = result.results.length ? result.results[0].formatted_address : 'No Result'
      }else{
        this.model.zipAddress = ''
      }
    }

}
