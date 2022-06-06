import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { StaticMasterService } from 'src/app/modules/shared/services/static-master.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  action: any = ''
  constructor(public auth: AuthService, private router: Router,) { }

  ngOnInit(): void {
  }

  navigateProfile() {
    this.router.navigate(['profile/personal-info'])
    this.action = ''
  }
}