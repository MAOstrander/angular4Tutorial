import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserDataService } from './services/user-data.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(public userData: UserDataService, public router: Router){};

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('what happens?')
    return this.userData.getUserLoggedIn();
  }
}
