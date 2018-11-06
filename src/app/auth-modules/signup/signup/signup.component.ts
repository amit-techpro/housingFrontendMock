import { Component, OnInit } from '@angular/core';
import { UserService, UserType } from '../../../services/user/user.service';
import { UiService } from '../../../services/ui/ui.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { bindCallback } from 'rxjs/observable/bindCallback';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public email = '';
  public type = UserType.ADMIN;

  public error = null;

  constructor(
    private user: UserService,
    private ui: UiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signup() {
    if (!this.email) {
      swal('Warning!', 'Email is required', 'warning');
      return;
    }
    this.ui.loader.show();
    this.user.signup(this.email, this.type + '', (err, res) => {
      this.ui.loader.hide();
      if (err) {
        swal('Warning!', err[Object.keys(err)[0]], 'warning');
      } else {
        swal('Success!', 'Mail sent successfully!', 'success');
        this.router.navigate(['login']);
      }
    });
  }

}
