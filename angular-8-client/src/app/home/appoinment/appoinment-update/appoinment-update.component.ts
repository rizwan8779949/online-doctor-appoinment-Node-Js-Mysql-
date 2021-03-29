import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorService } from 'src/app/shared-module/Services/doctor/doctor.service';
@Component({
  selector: 'app-appoinment-update',
  templateUrl: './appoinment-update.component.html',
  styleUrls: ['./appoinment-update.component.scss'],
})
export class AppoinmentUpdateComponent implements OnInit {
  form: FormGroup;
  requestSentBoolean: Boolean = false;
  specialistTypeArrayList = this.doctorService.specialistTypeArrayList;
  allTimes = this.doctorService.allTimes;
  allDoctorList = [];
  paginationObj = {
    page: 1,
    limit: '100',
  };
  userDetails;
  statusList = ['Pending', 'Booked', 'Rejected'];
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private dialogRef: MatDialogRef<AppoinmentUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private doctorService: DoctorService
  ) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      patientId: [this.data?.patientId, Validators.required],
      doctorId: [this.data?.doctorId, Validators.required],
      consultantFees: [this.data?.consultantFees],
      description: [this.data?.description, Validators.required],
      specialistType: [this.data?.specialistType, Validators.required],
      dateOfApply: [new Date(this.data?.dateOfApply), Validators.required],
      status: [this.data?.status, Validators.required],
      appoinmentDateAndTime: [],
    });
    this.getPaginationList();
    this.userDetails = this.utils.getUserDetailsLogin();
  }

  resetFormAndHideModal() {
    this.form.reset();
    this.closeDialog();
  }
  getPaginationList() {
    this.api
      .commonGetMethod(this.paginationObj, 'doctors/allList')
      .subscribe((res: any) => {
        this.allDoctorList = res.content;
      });
  }
  formValid() {
    if (this.form.valid) {
      this.editAppoinmentApi();
    }
  }
  autoFillDoctorsDetails(event) {
    if (event.value) {
      this.allDoctorList.forEach((element) => {
        if (event.value == element.id) {
          this.form.controls.consultantFees.setValue(element?.consultantFees);
          this.form.controls.specialistType.setValue(element?.specialistType);
        }
      });

      this.form.controls.patientId.setValue(this.userDetails?.userDetails?.id);
    }
  }
  editAppoinmentApi() {
    if (!this.requestSentBoolean) {
      this.requestSentBoolean = true;
      if (this.form.controls.status.value == 'Booked') {
        this.form.controls.appoinmentDateAndTime.setValue(
          this.form.controls.dateOfApply.value
        );
      }
      let params = {};
      params['id'] = this.data?.id;
      this.api
        .commonUpdateMethod(params, this.form.value, 'appoinments/edit')
        .subscribe(
          (res: any) => {
            this.requestSentBoolean = false;
            this.snackBarService.success('Updated Successfully');
            this.closeDialog();
            this.form.reset();
          },
          (err: any) => {
            this.requestSentBoolean = false;
            this.snackBarService.error(err?.error?.message);
          }
        );
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
