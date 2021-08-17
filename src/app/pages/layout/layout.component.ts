import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { StaticMasterService } from 'src/app/modules/shared/services/static-master.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentUserRole!:string
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.currentUserRole = this.auth.currentUserValue['custom:user_type']
  }

}
