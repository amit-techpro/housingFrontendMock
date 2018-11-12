import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import swal from 'sweetalert2';
import { UiService } from '../../../../services/ui/ui.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  dashboardData = [];
  constructor(
    private DashboardService: DashboardService,
    private ui: UiService,
  ) { }

  ngOnInit() {

    this.ui.loader.show();
    this.DashboardService.getDashBoardData(
      (err, res) => {
        if (err) {
          swal('Error!', 'Something went wrong. Please try again later.', 'error');
        } else {
          this.dashboardData = res.data;

        }
      }
    );
    this.ui.loader.hide();

  }

}
