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
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.scss'],
})
export class PaymentAddComponent implements OnInit {
  form: FormGroup;
  modeOfPaymentArrayList = ['Online', 'Cash', 'Cheque'];
  allTimes = this.doctorService.allTimes;
  requestSentBoolean: Boolean = false;
  paginationObj = {
    page: 1,
    limit: '100',
  };
  allPatientList = [];
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private doctorService: DoctorService,
    private dialogRef: MatDialogRef<PaymentAddComponent>
  ) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      patientId: [null, Validators.required],
      dateOfPayment: [new Date(), Validators.required],
      amount: [0, Validators.required],
      modeOfPayment: [null, Validators.required],
    });
    this.getPaginationList();
  }

  resetFormAndHideModal() {
    this.form.reset();
    this.closeDialog();
  }
  getPaginationList() {
    this.api
      .commonGetMethod(this.paginationObj, 'patient/allList')
      .subscribe((res: any) => {
        this.allPatientList = res.content;
      });
  }
  formValid() {
    if (this.form.valid) {
      this.addPaymentApi();
    }
  }
  addPaymentApi() {
    if (!this.requestSentBoolean) {
      this.requestSentBoolean = true;
      this.api.commonPostMethod(this.form.value, 'payment/create').subscribe(
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
