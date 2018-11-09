import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public dashboardData = null;
  constructor(
    private DashboardService: DashboardService,
  ) { }

  ngOnInit() {

    //this.ui.loader.show();
    this.DashboardService.getDashBoardData(
      (err, res) => {
        // this.ui.loader.hide();
        if (err) {
          swal('Error!', 'Something went wrong. Please try again later.', 'error');
        } else {
          this.dashboardData = {
            ...res.data
          };
        }
      }
    );

  }

}
