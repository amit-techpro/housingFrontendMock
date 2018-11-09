import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient,
  ) { }


  getDashBoardData(callback) {
    this.http.get('http://demo5533466.mockable.io/housing/login').subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }
}
