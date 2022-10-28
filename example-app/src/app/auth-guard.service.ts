import { TypeScriptEmitter } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
 
 
@Injectable({
    providedIn: 'root',
  })
export class AuthGuardService implements CanActivate {
    constructor( private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return true;
    }
 
}