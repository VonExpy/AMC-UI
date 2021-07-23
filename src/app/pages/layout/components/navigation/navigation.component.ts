import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Role } from 'src/app/_models/role';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  currentUser!: User;
  constructor(private auth:AuthService) { 
    this.auth.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

}
