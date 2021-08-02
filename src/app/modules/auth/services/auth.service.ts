import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { environment } from 'src/environments/environment';
import { Role } from 'src/app/_models/role';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = true
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient,private router:Router) {
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

  registrationFlow(user: any) {
    return Auth.signUp({
      username: user.email.toLowerCase(),
      password: user.password,
      attributes: {
        given_name: user.firstName,
        family_name: user.lastName,
        email: user.email,
        phone_number: '+1' + user.phoneNumber,
        middle_name: user.middleName,
        name: user.firstName + ', ' + user.lastName,
        'custom:license_number': user.licenseNumber,
        'custom:referred_by': user.referredBy || '<none>',
        'custom:agree_tos': Date.now().toString(),
        'custom:sign_up_usr_type': 'AD',
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

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null!);
    this.router.navigate(['/auth/login']);
  }
}