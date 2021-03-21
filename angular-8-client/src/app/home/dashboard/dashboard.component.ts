import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { Router } from '@angular/router';
import { DatePickerService } from 'src/app/shared-module/Services/datepicker/date-picker.service';
import { SocketService } from 'src/app/shared-module/Services/Socket/socket.service';
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
    private datePickerService: DatePickerService,
    private socketService: SocketService
  ) {}
  dashbaordDto = new DashboardData();
  fromDate = new Date(new Date().setDate(new Date().getDate() - 7));
  toDate = new Date();
  formList = new Array();
  ngOnInit() {
    this.getDashBoardData();
  }
  goto(url) {
    this.router.navigateByUrl(url);
  }
  getDashBoardData() {
    let fromDate, toDate;
    fromDate = new Date(this.fromDate);
    toDate = new Date(this.toDate);
    this.api
      .commonPostMethod(
        this.datePickerService.materialDatePickerConvert(fromDate),
        this.datePickerService.materialDatePickerConvert(toDate)
      )
      .subscribe(
        (res: any) => {
          this.dashbaordDto = res.data;
        },
        (err) => {
          this.snackBarService.error(err.error.message);
        }
      );
  }
  getSocketData() {
    this.socketService.socket.on('data_added', (data: any) => {
      this.dashbaordDto.amount += data.amount;
      this.dashbaordDto.meetings += data.meetings;
      this.dashbaordDto.referrals += data.referrals;
      this.dashbaordDto.testimonials += data.testimonials;
      this.dashbaordDto.visitor += data.visitor;
      this.formList.unshift(data);
      console.log('Socket data', data);
    });
  }
  getDashboardDataAccordingDate(data) {
    this.dashbaordDto = data;
  }

  gotoWithPage(url) {
    this.router.navigateByUrl(url);
  }
}
export class DashboardData {
  meetings;
  referrals;
  amount;
  visitor;
  testimonials;
}
