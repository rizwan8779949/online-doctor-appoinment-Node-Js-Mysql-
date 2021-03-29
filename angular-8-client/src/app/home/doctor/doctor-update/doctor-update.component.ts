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
  selector: 'app-doctor-update',
  templateUrl: './doctor-update.component.html',
  styleUrls: ['./doctor-update.component.scss'],
})
export class DoctorUpdateComponent implements OnInit {
  form: FormGroup;
  requestSentBoolean: Boolean = false;
  specialistTypeArrayList = this.doctorService.specialistTypeArrayList;
  allTimes = this.doctorService.allTimes;
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private dialogRef: MatDialogRef<DoctorUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private doctorService: DoctorService
  ) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      doctorName: [this.data?.doctorName, Validators.required],
      emailId: [
        this.data?.emailId,
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      address: [this.data?.address, Validators.required],
      consultantFees: [this.data?.consultantFees, Validators.required],
      workingTime: [null],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      specialistType: [this.data?.specialistType, Validators.required],
    });
  }

  resetFormAndHideModal() {
    this.form.reset();
    this.closeDialog();
  }

  formValid() {
    if (this.form.valid) {
      this.editDoctorApi();
    }
  }
  editDoctorApi() {
    if (!this.requestSentBoolean) {
      this.requestSentBoolean = true;
      this.form.controls.workingTime.setValue(
        this.form.controls.startTime.value +
          '-' +
          this.form.controls.endTime.value
      );
      let params = {};
      params['id'] = this.data?.id;
      this.api
        .commonUpdateMethod(params, this.form.value, 'doctors/edit')
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
