import {Injectable} from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router, Route
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {catchError, map, take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router, private authService: AuthService) {
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin ();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin ();
  }

  checkLogin(): Observable<boolean> {
    return this.authService.getUserLogged().pipe(
      take(1),
      map(e => {
        if (!!e) {
          return true;
        } else {
         this.router.navigateByUrl('login');
        }
      }),
      catchError((err) => {
        this.router.navigateByUrl('login');
        return of(false);
      })
    ); }
}
