import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserSession } from 'amazon-cognito-identity-js';
import { LoaderService } from '../../shared/services/loader.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = true
  authStatusChanged = new Subject<boolean>();
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  POOL_DATA = {
    UserPoolId: environment.UserPoolId,
    ClientId: environment.ClientId
  };
  userPool = new CognitoUserPool(this.POOL_DATA);

  constructor(private http: HttpClient,
    private router: Router,
    private loaderService: LoaderService,
    private toastr: ToastrService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem("currentUser") as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  signIn(username: string, password: string, returnURl: string): void {
    this.loaderService.isLoading.next(true)
    const authData = {
      Username: username,
      Password: password
    };
    const authDetails = new AuthenticationDetails(authData);
    const userData = {
      Username: username,
      Pool: this.userPool
    };
    const cognitoUser = new CognitoUser(userData);
    const that = this;
    cognitoUser.authenticateUser(authDetails, {
      onSuccess(result: CognitoUserSession) {
        that.authStatusChanged.next(true);
        // const payload = result.getIdToken().payload
        // const user:any = {email:payload.email,role:'Admin',id:payload.sub}
        // that.currentUserSubject.next(user);
        // that.authDidFail.next(false);
        that.loaderService.isLoading.next(false)
        that.router.navigate([returnURl]);
        console.log(result, 'result');
      },
      onFailure(err) {
        // that.authDidFail.next(true);
        that.loaderService.isLoading.next(false)
        that.toastr.error(err.message, err.code)
        console.log(err);
      }
    });
    this.authStatusChanged.next(true); // create user with cognito data
    return;
  }

  getAuthenticatedUser() {
    return this.userPool.getCurrentUser();
  }

  isAuthenticated(): Observable<boolean> {
    const user = this.getAuthenticatedUser();
    const obs = Observable.create((observer: any) => {
      if (!user) {
        observer.next(false);
      } else {
        user.getSession((err: any, session: any) => {
          if (err) {
            observer.next(false);
          } else {
            if (session.isValid()) {
              observer.next(true);
            } else {
              observer.next(false);
            }
          }
        });
      }
      observer.complete();
    });
    return obs;
  }

  initAuth() {
    this.isAuthenticated().subscribe(
      (auth) => this.authStatusChanged.next(auth)
    );
  }

  // logout() {
  //   // remove user from local storage to log user out
  //   localStorage.removeItem('currentUser');
  //   this.currentUserSubject.next(null!);
  //   this.router.navigate(['/auth/login']);
  // }

  logout() {
    this.getAuthenticatedUser()?.signOut();
    this.authStatusChanged.next(false);
  }
}