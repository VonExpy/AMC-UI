import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './modules/auth/services/auth.service';
import { LoaderService } from './modules/shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lhub';
  isAuthenticated = false;
  returnUrl!: string;

  constructor(private loaderService: LoaderService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // this.loaderService.isLoading.next(true)
  }


  ngOnInit() {
    this.auth.authStatusChanged.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
        if (authenticated) {
          this.router.navigate([this.returnUrl]);
        } else {
          this.router.navigate(['/auth/login']);
        }
      }
    );
    this.auth.initAuth();
  }


}
