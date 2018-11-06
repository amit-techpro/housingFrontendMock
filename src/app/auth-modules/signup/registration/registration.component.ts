import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UiService } from '../../../services/ui/ui.service';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public form: FormGroup;
  public token = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private ui: UiService,
    private http: HttpClient,
    private router: Router
  ) {
    this.form = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['M']
    });
  }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    localStorage.setItem('access_token', this.token);
    this.ui.loader.show();
    this.http.get('/auth/me').subscribe(
      (res: any) => {
        this.ui.loader.hide();
        this.form.patchValue({ email: res.email });
        localStorage.removeItem('access_token');
      },
      err => {
        this.ui.loader.hide();
        this.router.navigate(['login']);
        localStorage.removeItem('access_token');
      }
    );
  }

  submit() {
    // TODO: implement
    localStorage.setItem('access_token', this.token);
    this.ui.loader.show();
    this.http.patch('/auth/user', this.form.value).subscribe(
      res => {
        this.ui.loader.hide();
        swal('Success!', 'You are successfully registered.', 'success');
        this.router.navigate(['']);
      },
      err => {
        this.ui.loader.hide();
        localStorage.removeItem('access_token');
        swal('Warning!', err[Object.keys(err)[0]], 'warning');
      }
    );
  }

}
