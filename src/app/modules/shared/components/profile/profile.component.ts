import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
  }

  openSideNav(){
    this.sharedService.sideNav("open");
  }

}
