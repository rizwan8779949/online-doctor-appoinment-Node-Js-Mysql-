import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { Router } from '@angular/router';
import { DatePickerService } from 'src/app/shared-module/Services/datepicker/date-picker.service';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';
import { element } from 'protractor';
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
  paginationObj = {
    page: 1,
    limit: '10',
  };
  listDto = new Array();

  ngOnInit() {
    this.getDashBoardData();
  }
  goto(url) {
    this.router.navigateByUrl(url);
  }
  getDashBoardData() {
    this.api
      .commonGetMethod(this.paginationObj, 'appoinments/allList')
      .subscribe((res: any) => {
        this.appintmentList = res.content;
        this.bookedAndUnBookedAppoinmentList();
      });
  }
  bookedAndUnBookedAppoinmentList() {
    var unBookedList = [];
    var bookedList = [];
    this.appintmentList.forEach((element) => {
      if (element.status !== 'Booked') {
        unBookedList.push(element);
      } else if (element.status == 'Booked') {
        bookedList.push(element);
      }
    });
    this.dashbaordDto.bookedAppooinment = bookedList?.length;
    this.dashbaordDto.unBookedAppoinment = unBookedList?.length;
    this.dashbaordDto.doughnutChartDataFromApiCounts = [];
    this.dashbaordDto.doughnutChartDataFromApiCounts.push(
      this.dashbaordDto.bookedAppooinment
    );
    this.dashbaordDto.doughnutChartDataFromApiCounts.push(
      this.dashbaordDto.unBookedAppoinment
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
  doughnutChartDataFromApiCounts = [];
}
