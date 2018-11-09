import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { UiService } from '../../../services/ui/ui.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user_credentials = {
    username: '',
    password: ''
  };
  public remember_me = false;

  public error = null;


  constructor(
    private http: HttpClient,
    private user: UserService,
    private ui: UiService,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  login() {
    if (!this.user_credentials.username) {
      swal('Warning!', 'Email field is required.', 'warning');
      return;
    }
    if (!this.user_credentials.password) {
      swal('Warning!', 'Password field is required.', 'warning');
      return;
    }
    this.user.login(this.user_credentials, (err) => {
      this.ui.loader.hide();
      if (err) {
        this.error = err;
        if (Object.keys(err).length) {
          swal('Error!', err[Object.keys(err)[0]], 'warning');
        }
      } else {
        if (this.remember_me) {
          localStorage.setItem('rem', JSON.stringify(this.user_credentials));
        } else {
          localStorage.getItem('rem') && localStorage.removeItem('rem');

        }
        this.router.navigate(['']);
      }
    });

    console.log("in login fn");
  }


}
