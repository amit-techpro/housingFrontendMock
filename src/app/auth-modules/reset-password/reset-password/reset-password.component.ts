import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UiService } from '../../../services/ui/ui.service';
import { UserType } from '../../../services/user/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public email = '';
  public error = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private ui: UiService
  ) { }

  ngOnInit() {
  }

  sendMail() {
    const payload = {
      link: environment.baseUrl + '/reset-password/',
      email: this.email,
      type: UserType.ADMIN + ''
    }
    this.ui.loader.show();
    this.http.post('/auth/forgot-password', payload).subscribe(
      (res: any) => {
        this.ui.loader.hide();
        if (res.error) {
          swal('Warning!', res.error, 'warning');
        } else {
          swal('Mail sent!', 'Reset link is sent to your email', 'success');
          this.router.navigate(['']);
        }
      },
      err => {
        this.ui.loader.hide();
        swal('Error!', err[Object.keys(err)[0]], 'error');
      }
    );
  }

}
