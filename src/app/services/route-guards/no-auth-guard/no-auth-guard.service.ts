import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../../user/user.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NoAuthGuardService implements CanActivate {

  constructor(
    private user: UserService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.user.loggedIn().subscribe(
        res => {
          if (res) {
            resolve(false);
            this.router.navigate(['']);
          } else {
            resolve(true);
          }
        },
        err => {
          resolve(false);
          this.router.navigate(['']);
        }
      );
    });
  }

}
