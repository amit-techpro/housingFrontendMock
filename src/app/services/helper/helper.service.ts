import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment';

import { environment } from '../../../environments/environment';

@Injectable()
export class HelperService {

  constructor(
    private router: Router,
    private user: UserService,
    private location: Location,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) { }

  get baseRoute() {
    // console.log(this.router.url);
    return ``;
  }

  navigateBack() {
    this.location.back();
  }

  getSafeFileUrl(file) {
    return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
  }

  getDownloadablePath(file) {
    const filename = '/' + file.enc_name + '.' + file.extension;
    const filepath = file.tmp_path ? file.tmp_path + filename : file.path + filename;
    return environment.apiUrl + '/' + filepath;
  }

  static convertDate(date, onlyDate = false) {
    if (moment(date).isValid()) {
      return onlyDate
        ? moment(date).format('YYYY-MM-DD')
        : moment(date).format('YYYY-MM-DD HH:mm:ss');
    }
    else {
      return '';
    }

  }

  fromRoman(str): number {
    if (!str) { return 0; }
    let result = 0;
    // the result is now a number, not a string
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    decimal.forEach((value, i) => {
      while (str.indexOf(roman[i]) === 0) {
        //checking for the first characters in the string
        result += value;
        //adding the decimal value to our result counter
        str = str.replace(roman[i], '');
        //remove the matched Roman letter from the beginning
      }
    })
    return result;
  }


  getProfileImageUrl(image) {
    return image ? environment.apiUrl + '/' + image : '../assets/img/icon-no-image.png';
  }

  getFromConstant(key, callback) {
    this.http.get('/bmi-others/constant/' + key).subscribe(
      res => {
        callback(null, res);
      },
      callback
    );
  }

}
