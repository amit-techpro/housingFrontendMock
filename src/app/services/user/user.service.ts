import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


import { Observable } from 'rxjs';
import { UiService } from '../ui/ui.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {

  public info = null;
  constructor(
    private http: HttpClient,
    private router: Router,
    private ui: UiService
  ) { }

  loggedIn() {
    return Observable.create(obs => {
      const token = localStorage.getItem('access_token');
      if (token) {
        if (this.info) {
          obs.next(true);
          return;
        }
        this.ui.loader.show();
        this.http.get('http://demo5533466.mockable.io/housing/login').subscribe(
          (res: any) => {
            //this.ui.loader.hide();
            this.info = res;
            obs.next(true);
          },
          err => {
            this.ui.loader.hide();
            obs.next(false);
            localStorage.removeItem('access_token');
          }
        );
      } else {
        obs.next(false);
      }
    });


  }

  login(user_credentials, callback) {
    const payload = {
      ...user_credentials
    }
    this.http.post("http://www.housingapi.com/v1/users/login", payload).subscribe(
      (res: any) => {
        console.log(res.dataset);
        localStorage.setItem('access_token', '1325522');
        callback(null)
      },
      err => {
        callback(err);
      }
    )
  }

  logout() {
    console.log("logout");
    this.http.get('http://demo5533466.mockable.io/housing/login', {}).subscribe(
      res => {
        this.info = null;
        localStorage.removeItem('access_token');
        this.router.navigate(['login']);
      },
    );
  }


}
