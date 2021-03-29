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
  selector: 'app-doctor-delete',
  templateUrl: './doctor-delete.component.html',
  styleUrls: ['./doctor-delete.component.scss'],
})
export class DoctorDeleteComponent implements OnInit {
  requestSentBoolean: Boolean = false;
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private dialogRef: MatDialogRef<DoctorDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}
  ngOnInit(): void {}
  deleteDoctor() {
    let params = {};
    params['id'] = this.data?.id;
    this.api.commonDeleteMethod(params, 'doctors/delete').subscribe(
      (res: any) => {
        this.snackBarService.success('Deleted Successfully');
        this.dialogRef.close();
      },
      (err: any) => {
        this.snackBarService.error(err?.error?.message);
      }
    );
  }
}
