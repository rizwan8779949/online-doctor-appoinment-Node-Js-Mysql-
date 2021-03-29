import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';
import { DoctorService } from 'src/app/shared-module/Services/doctor/doctor.service';
@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.scss'],
})
export class DoctorAddComponent implements OnInit {
  form: FormGroup;
  specialistTypeArrayList = this.doctorService.specialistTypeArrayList;
  allTimes = this.doctorService.allTimes;
  requestSentBoolean: Boolean = false;
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private doctorService: DoctorService,
    private dialogRef: MatDialogRef<DoctorAddComponent>
  ) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      doctorName: [null, Validators.required],
      phoneNo: [null, Validators.required],
      emailId: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      address: [null, Validators.required],
      password: [null, Validators.required],
      consultantFees: [0, Validators.required],
      workingTime: [null],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      specialistType: [null, Validators.required],
    });
  }

  resetFormAndHideModal() {
    this.form.reset();
    this.closeDialog();
  }

  formValid() {
    if (this.form.valid) {
      this.checkPhoneNumberNotAlreadyExist();
    }
  }
  addDoctorApi() {
    if (!this.requestSentBoolean) {
      this.form.controls.workingTime.setValue(
        this.form.controls.startTime.value +
          '-' +
          this.form.controls.endTime.value
      );
      this.requestSentBoolean = true;
      this.api.commonPostMethod(this.form.value, 'doctors/create').subscribe(
        (res: any) => {
          this.requestSentBoolean = false;
          this.snackBarService.success('Created Successfully');
          this.closeDialog();
        },
        (err: any) => {
          this.requestSentBoolean = false;
          this.snackBarService.error(err?.error?.message);
        }
      );
    }
  }
  createSaveSignUpDataForLogin() {
    var signUpDataForLogin = {
      userName: this.form.controls.phoneNo.value,
      roleName: 'Doctor',
      password: this.form.controls.password.value,
    };
    this.api
      .commonPostMethod(signUpDataForLogin, 'commonLogin/create')
      .subscribe(
        (res: any) => {
          this.addDoctorApi();
          this.snackBarService.success('Created Successfully');
          this.form.reset();
        },
        (err: any) => {
          if (err?.error?.message == 'Validation error')
            this.snackBarService.error('Phone No. already exists.');
        }
      );
  }
  checkPhoneNumberNotAlreadyExist() {
    if (this.form.controls.phoneNo.value) {
      var phoneNo = this.form.controls.phoneNo.value;
      let params = {};
      params['phoneNo'] = phoneNo;
      this.api
        .commonGetMethod(params, 'doctors/findByPhoneNo')
        .subscribe((res: any) => {
          if (res?.data)
            this.snackBarService.error('Phone No. already exists.');
          else {
            this.createSaveSignUpDataForLogin();
          }
        });
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
