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
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['./member-update.component.scss'],
})
export class MemberUpdateComponent implements OnInit {
  form: FormGroup;
  requestSentBoolean: Boolean = false;
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private dialogRef: MatDialogRef<MemberUpdateComponent>,
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

  memberFormValid() {
    if (this.form.valid) {
      this.editMemberApi();
    }
  }
  editMemberApi() {
    if (!this.requestSentBoolean) {
      this.requestSentBoolean = true;
      this.api.commonUpdateMethod(null, this.form.value, '').subscribe(
        (res: any) => {
          this.requestSentBoolean = false;
          this.snackBarService.success(res['msg']);
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
