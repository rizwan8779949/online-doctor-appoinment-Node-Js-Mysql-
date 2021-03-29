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
@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.scss'],
})
export class PatientUpdateComponent implements OnInit {
  form: FormGroup;
  requestSentBoolean: Boolean = false;
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private dialogRef: MatDialogRef<PatientUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      patientName: [this.data?.patientName, Validators.required],
      emailId: [
        this.data?.emailId,
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      address: [this.data?.address, Validators.required],
    });
  }

  resetFormAndHideModal() {
    this.form.reset();
    this.closeDialog();
  }

  formValid() {
    if (this.form.valid) {
      this.editPatientApi();
    }
  }
  editPatientApi() {
    if (!this.requestSentBoolean) {
      this.requestSentBoolean = true;
      let params = {};
      params['id'] = this.data?.id;
      this.api
        .commonUpdateMethod(params, this.form.value, 'patient/edit')
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
