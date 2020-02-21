import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private routes:Router){}
  canActivate() {
    if(localStorage.getItem('user')!==null)
      {
        return true;
      }
      else
      {
        this.routes.navigate(['/loginpage']);
        return false;
      }
  }
  
}
