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
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.scss'],
})
export class PatientDeleteComponent implements OnInit {
  id;
  requestSentBoolean: Boolean = false;
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private dialogRef: MatDialogRef<PatientDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}
  ngOnInit(): void {
    this.id = this.data._id;
  }
  deletePatient() {
    this.api.commonDeleteMethod(this.id, '').subscribe(
      (res: any) => {
        this.snackBarService.success(res['message']);
        this.dialogRef.close();
      },
      (err: any) => {
        this.snackBarService.error(err?.error?.message);
      }
    );
  }
}
