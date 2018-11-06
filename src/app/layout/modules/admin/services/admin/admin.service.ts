import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserType } from '../../../../../services/user/user.service';
import { HelperService } from '../../../../../services/helper/helper.service';

@Injectable()
export class AdminService {

  public programmeId = null;
  public classId = null;
  public programmeDetailsTab = 1;
  public embaName = '';
  public programme = null;

  public userType = UserType;
  public static UserType = UserType;

  get embaSession() {
    if (this.embaName) {
      return this.helper.fromRoman(this.embaName.split(' ')[1]);
    }
    return 0;
  }

  constructor(
    private http: HttpClient,
    private helper: HelperService
  ) {
    // this.event.on('admin-service', 'selectedClassId', classId => this.classId = classId);
  }

  createYear(payload, callback) {
    this.http.post('/class', payload).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }
}
