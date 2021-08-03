import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Auth } from 'aws-amplify';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) { }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     const currentUser = this.authenticationService.currentUserValue;
    //     if (currentUser) {
    //         // check if route is restricted by role
    //         if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
    //             // role not authorised so redirect to home page
    //             this.router.navigate(['/']);
    //             return false;
    //         }

    //         // authorised so return true
    //         return true;
    //     }
    //     // not logged in so redirect to login page with the return url
    //     this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    //     return true;
    // }
    // const currentUserGroups = currentUser.signInUserSession.accessToken.payload["cognito:groups"];
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return Auth.currentAuthenticatedUser().then(user => {
            // this.auth.setUserLoggedIn(true);
            console.log(user,'user auth guard')
            this.authenticationService.currentUserSubject.next(user.attributes);
            return true;
        }).catch(err => {
            this.router.navigate(['/auth/login'], {
                queryParams: {
                    return: state.url
                }
            });
            return false;
        });
    }
}