import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

interface UserInfo {
  address: string;
  date_of_birth: Date;
  email: string;
  gender: string;
  name: "Admin";
  phone: null;
  type: "2";
}

export enum UserType {
  ADMIN = 2,
  ALUMNI,
  TEACHER,
  STUDENT
};

import swal from 'sweetalert2';
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

  get role() {
    if (this.info) {
      switch (this.info.type) {
        case '1': return 'super-admin';
        case '2': return 'admin';
        case '3': return 'alumni';
        case '4': return 'teacher';
        case '5': return 'student';
      }
    }
    return '';
  }

  loggedIn() {
    return Observable.create(obs => {
      const token = localStorage.getItem('access_token');
      if (token) {
        if (this.info) {
          obs.next(true);
          return;
        }
        this.ui.loader.show();
        this.http.get('/auth/me').subscribe(
          (res: any) => {
            this.ui.loader.hide();
            if (res.type != UserType.ADMIN) {
              obs.next(false);
              localStorage.removeItem('access_token');
            } else {
              this.info = res;
              obs.next(true);
            }
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
      ...user_credentials,
      type: UserType.ADMIN + ''
    }
    this.http.post('/auth/login', payload).subscribe(
      (res: any) => {
        localStorage.setItem('access_token', res.access_token);
        callback(null)
      },
      err => {
        callback(err);
      }
    )
  }

  signup(email, type, callback) {
    const payload = {
      email, type,
      link: environment.baseUrl + '/signup/complete/',
      gdpr_acceptance: 'A'
    };
    this.http.post('/auth/register', payload).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err)
      }
    );
  }

  logout() {
    this.http.post('/auth/logout', {}).subscribe(
      res => {
        this.info = null;
        localStorage.removeItem('access_token');
        this.router.navigate(['login']);
      },
      console.log
    );
  }

  getUserDetails() {
    if (this.loggedIn) {

    }
  }

  uploadProfileImage(file, callback) {
    const formData = new FormData();
    formData.append('img', file);
    let headers = new HttpHeaders();
    headers = headers.set('no-content-type', 'true');
    this.http.post('/user/profile-pic', formData, { headers }).subscribe(
      (res: any) => {
        this.info.image = res.file.name;
        console.log(this.info.image);
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

  updateProfile(payload, callback) {
    this.http.put('/user', payload).subscribe(
      (res: any) => {
        this.info = res.user;
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

  changePassword(payload, callback) {
    this.http.put('/my/password', payload).subscribe(
      res => {
        callback(null, res);
      },
      callback
    );
  }

  changeProfileImage(payload, type, callback) {
    const formData = new FormData();
    for (let key in payload) {
      formData.append(key, payload[key]);
    }
    let headers = new HttpHeaders();
    headers = headers.set('no-content-type', 'true');
    this.http.post(
      '/' + type + (type === 'teacher' ? '/pic' : ''), formData, { headers }
    ).subscribe(
      (res: any) => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

  updateProfileByType(type, payload, user_id, callback) {
    this.http.put('/' + type + '/' + user_id, payload).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

}
