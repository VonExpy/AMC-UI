import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-promissory-header',
  templateUrl: './promissory-header.component.html',
  styleUrls: ['./promissory-header.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class PromissoryHeaderComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}
