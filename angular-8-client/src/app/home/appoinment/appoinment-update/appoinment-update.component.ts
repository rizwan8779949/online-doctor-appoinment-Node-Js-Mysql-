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
      workingTime: [null, Validators.required],
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
      this.editAppoinmentApi();
    }
  }
  editAppoinmentApi() {
    if (!this.requestSentBoolean) {
      this.requestSentBoolean = true;
      this.api.commonUpdateMethod(null, this.form.value, '').subscribe(
        (res: any) => {
          this.requestSentBoolean = false;
          this.snackBarService.success(res['message']);
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
