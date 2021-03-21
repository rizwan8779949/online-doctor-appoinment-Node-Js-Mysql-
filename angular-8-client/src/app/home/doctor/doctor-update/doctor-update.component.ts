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
  selector: 'app-doctor-update',
  templateUrl: './doctor-update.component.html',
  styleUrls: ['./doctor-update.component.scss'],
})
export class DoctorUpdateComponent implements OnInit {
  form: FormGroup;
  requestSentBoolean: Boolean = false;
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private dialogRef: MatDialogRef<DoctorUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [this.data.name, Validators.required],
      phoneNumber: [this.data.phoneNumber, Validators.required],
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
      this.api.commonUpdateMethod(null, this.form.value, '').subscribe(
        (res: any) => {
          this.requestSentBoolean = false;
          this.snackBarService.success(res['message']);
          this.closeDialog();
          this.form.reset();
        },
        (err: any) => {
          this.requestSentBoolean = false;
          this.snackBarService.error(err.error.message);
        }
      );
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
