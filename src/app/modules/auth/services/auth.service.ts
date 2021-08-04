import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { environment } from 'src/environments/environment';
import { Role } from 'src/app/_models/role';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { LoaderService } from '../../shared/services/loader.service';
@Injectable({ providedIn: 'root' })
export class AuthService {
  public loggedIn!: BehaviorSubject<boolean>;
  currentUserAttributes!: any
  currentUserSubject = new BehaviorSubject<any>(undefined);
  // public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router,
    private loaderService: LoaderService) {
    this.loggedIn = new BehaviorSubject<boolean>(false);
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  /** get authenticated state */
  public isAuthenticated(): Observable<boolean> {
    return of(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          this.loggedIn.next(true);
          return true;
        }),
        catchError(error => {
          this.loggedIn.next(false);
          return of(false);
        })
      );
  }

  signIn(email:string,password:string){
    return Auth.signIn(email,password)
  }

  forgotPassword(email:string){
    return Auth.forgotPassword(email)
  }

  forgotPasswordSubmit(email:string,code:string,newPassword:string){
    return Auth.forgotPasswordSubmit(email,code,newPassword)
  }

  // login(username: string, password: string) {
  //   return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
  //     .pipe(map(user => {
  //       // login successful if there's a jwt token in the response
  //       if (user && user.token) {
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //         this.currentUserSubject.next(user);
  //       }
  //       return user;
  //     }));
  // }

  registrationFlow(account: any, user: any, email: string) {
    return Auth.signUp({
      username: email.toLowerCase(),
      password: user.password,
      attributes: {
        given_name: account.firstName,
        family_name: account.lastName,
        email: email,
        phone_number: '+1' + user.phoneNumber,
        middle_name: account.middleName,
        name: account.firstName + ', ' + account.lastName,
        'custom:license_number': user.licenseNumber,
        'custom:referred_by': user.referredBy || '<none>',
        'custom:agree_tos': Date.now().toString(),
        'custom:user_type': 'AD',
        // address: '105 Main St. New York, NY 10001'
        /* additional attrs that can be used
          birthdate: '',
          gender: '',
          locale: '',
          nickname: '',
          picture: '',
          preferred_username: '',
          profile: '',
          zoneinfo: ''
          updated_at: ''
          website: ''
        */
      },
      clientMetadata: {
        'license': user.licenseNumber
      }
    });
  }

  async getCurrentUserAttr() {
    if (this.currentUserAttributes) {
      return this.currentUserAttributes
    } else {
      this.currentUserAttributes = (await Auth.currentAuthenticatedUser())['attributes'];
      return this.currentUserAttributes
    }
  }

  async logout() {
    try {
      this.loaderService.isLoading.next(true)
      await Auth.signOut();
      this.currentUserSubject.next(null)
      this.loaderService.isLoading.next(false)
      this.router.navigate(['/auth/login']);
    } catch (error) {
      console.log('error signing out: ', error);
      this.loaderService.isLoading.next(false)
    }
  }
}