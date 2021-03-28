import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { Router } from '@angular/router';
import { DatePickerService } from 'src/app/shared-module/Services/datepicker/date-picker.service';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private router: Router,
    private snackBarService: SnackBarService,
    private datePickerService: DatePickerService
  ) {}
  dashbaordDto = new DashboardData();
  appintmentList = new Array();

  ngOnInit() {
    // this.getDashBoardData();
  }
  goto(url) {
    this.router.navigateByUrl(url);
  }
  getDashBoardData() {
    this.api.commonPostMethod('', '').subscribe(
      (res: any) => {
        this.dashbaordDto = res.data;
      },
      (err) => {
        this.snackBarService.error(err?.error?.message);
      }
    );
  }

  gotoWithPage(url) {
    this.router.navigateByUrl(url);
  }
}
export class DashboardData {
  bookedAppooinment;
  unBookedAppoinment;
  doughnutChartDataFromApiLabel = ['Booked Appoinment', 'Unbooked Appoinment'];
  doughnutChartDataFromApiCounts = [10, 30];
}
