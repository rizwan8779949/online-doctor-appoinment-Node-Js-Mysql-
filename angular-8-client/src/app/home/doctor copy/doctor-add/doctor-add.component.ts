import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { ApiService } from './node_modules/src/app/shared-module/Services/api/api.service';
import { UtilsService } from './node_modules/src/app/shared-module/Services/utils/utils.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from './node_modules/src/app/shared-module/Services/snackBar/snack-bar.service';
import { DoctorService } from './node_modules/src/app/shared-module/Services/doctor/doctor.service';
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
      this.addDoctorApi();
    }
  }
  addDoctorApi() {
    if (!this.requestSentBoolean) {
      this.requestSentBoolean = true;
      this.api.commonPostMethod(this.form.value, '').subscribe(
        (res: any) => {
          this.requestSentBoolean = false;
          this.snackBarService.success(res['message']);
          this.closeDialog();
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
