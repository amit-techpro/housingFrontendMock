import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UiService } from '../../../services/ui/ui.service';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-reset-password-link',
  templateUrl: './reset-password-link.component.html',
  styleUrls: ['./reset-password-link.component.css']
})
export class ResetPasswordLinkComponent implements OnInit {

  public password = '';
  public confirmPassword = '';

  private token = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private ui: UiService,
    private user: UserService
  ) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    localStorage.setItem('access_token', this.token);
    this.ui.loader.show();
    this.http.get('/auth/me').subscribe(
      res => {
        this.ui.loader.hide();
        localStorage.removeItem('access_token');
      },
      err => {
        this.ui.loader.hide();
        localStorage.removeItem('access_token');
        this.router.navigate(['/']);
      }
    );
  }

  private clicked = 0;
  resetPassword() {
    if (!this.password) {
      swal('Error!', 'Password field is required', 'warning');
      return;
    }
    if (this.password !== this.confirmPassword) {
      swal('Error!', 'Password doesn\'t match', 'warning');
      return;
    }
    if (this.clicked) { return; }
    this.clicked = 1;
    localStorage.setItem('access_token', this.token);
    this.ui.loader.show();
    this.http.patch('/auth/update-password', {
      new_password: this.password,
      new_password_confirmation: this.password
    }).subscribe(
      res => {
        this.clicked = 0;
        this.ui.loader.hide()
        localStorage.setItem('jwt-logout', '1');
        this.user.logout();
        swal('Success!', 'Password reset successful', 'success');
        this.router.navigate(['login']);
      },
      err => {
        this.clicked = 0;
        this.ui.loader.hide();
        localStorage.removeItem('access_token');
      }
    );
  }

}
