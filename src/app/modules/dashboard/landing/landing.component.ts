import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { StaticMasterService } from '../../shared/services/static-master.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public staticService:StaticMasterService, private auth:AuthService) { }

  ngOnInit(): void {
     this.getCurrentUserAttr()
  }

   getCurrentUserAttr(){
    // const user = await this.auth.getCurrentUserAttr()
    console.log( this.auth.currentUserValue,'current user attrinutes')
  }
}
