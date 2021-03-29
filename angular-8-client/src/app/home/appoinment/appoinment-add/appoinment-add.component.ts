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
  selector: 'app-appoinment-add',
  templateUrl: './appoinment-add.component.html',
  styleUrls: ['./appoinment-add.component.scss'],
})
export class AppoinmentAddComponent implements OnInit {
  form: FormGroup;
  specialistTypeArrayList = this.doctorService.specialistTypeArrayList;
  allTimes = this.doctorService.allTimes;
  requestSentBoolean: Boolean = false;
  allDoctorList = [];
  paginationObj = {
    page: 1,
    limit: '100',
  };
  userDetails;
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private doctorService: DoctorService,
    private dialogRef: MatDialogRef<AppoinmentAddComponent>
  ) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      patientId: [null, Validators.required],
      doctorId: [null, Validators.required],
      consultantFees: [0],
      description: [null, Validators.required],
      specialistType: [null, Validators.required],
      dateOfApply: [new Date(), Validators.required],
      status: ['Pending', Validators.required],
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
      this.addAppoinmentApi();
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
  addAppoinmentApi() {
    if (!this.requestSentBoolean) {
      this.requestSentBoolean = true;
      this.api
        .commonPostMethod(this.form.value, 'appoinments/create')
        .subscribe(
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
  closeDialog() {
    this.dialogRef.close();
  }
}
