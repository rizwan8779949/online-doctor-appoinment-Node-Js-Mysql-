import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../Services/api/api.service';
import { Router } from '@angular/router';
import { UtilsService } from '../../Services/utils/utils.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnackBarService } from '../../Services/snackBar/snack-bar.service';
import { DatePickerService } from '../../Services/datepicker/date-picker.service';

@Component({
  selector: 'app-header-part',
  templateUrl: './header-part.component.html',
  styleUrls: ['./header-part.component.scss'],
})
export class HeaderPartComponent implements OnInit {
  constructor(
    private api: ApiService,
    private snackBarService: SnackBarService,
    private router: Router,
    private utils: UtilsService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private datePickerService: DatePickerService
  ) {}
  form: FormGroup;
  pageName;
  @Output() success = new EventEmitter();
  ngOnInit(): void {
    this.formVaidation();
    this.currentPageStore();
  }
  dateFilterGlobal() {
    let fromDate, toDate;
    fromDate = new Date(this.form.controls.fromDate.value);
    toDate = new Date(this.form.controls.toDate.value);
    if (this.router.url.includes('dashboard')) {
      this.getDashboardDataAccordingDate(
        this.datePickerService.materialDatePickerConvert(fromDate),
        this.datePickerService.materialDatePickerConvert(toDate)
      );
    }
  }
  formVaidation() {
    this.form = this.formBuilder.group({
      fromDate: [new Date(new Date().setDate(new Date().getDate() - 7))],
      toDate: [new Date()],
    });
  }
  getDashboardDataAccordingDate(fromDate, toDate) {
    this.api.commonPostMethod(fromDate, toDate).subscribe(
      (res: any) => {
        this.success.emit(res.data);
      },
      (err: any) => {
        this.utils.stopLoading();
        this.snackBarService.error(err.error.message);
      }
    );
  }
  currentPageStore() {
    if (this.router.url.includes('home/dashboard')) {
      this.pageName = 'Dashboard';
    } else if (this.router.url.includes('home/stats')) {
      this.pageName = 'Stats List';
    } else if (this.router.url.includes('home/members')) {
      this.pageName = 'Member List';
    }
  }
  dateOnlyVisible() {
    if (this.router.url.includes('home/dashboard')) return true;
    else return false;
  }
}
