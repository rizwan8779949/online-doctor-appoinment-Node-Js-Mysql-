import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { LoginService } from 'src/app/shared-module/Services/login/login.service';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';

import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup;
  constructor(
    private api: ApiService,
    private loginService: LoginService,
    private snackBarService: SnackBarService,
    private utils: UtilsService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  resetPasswordBoolean: Boolean = false;
  ngOnInit() {
    this.form = this.formBuilder.group({
      confirmPassword: [null, Validators.required],
      password: [null, Validators.required],
      resetToken: [null],
    });
    this.loginService.editDto.subscribe((res: any) => {
      if (res) {
        this.form.controls.resetToken.setValue(res);
      } else this.goto('auth/login');
    });
  }
  checkResetPasswordData() {
    if (this.form.valid) {
      if (
        this.form.controls.password.value !==
        this.form.controls.confirmPassword.value
      )
        this.snackBarService.error("Confirm Passwrod doesn't Match");
      else this.submitResetPasswordData();
    }
  }
  submitResetPasswordData() {
    if (!this.resetPasswordBoolean) {
      this.resetPasswordBoolean = true;
      this.api.commonPostMethod(this.form.value, '').subscribe(
        (res: any) => {
          this.resetPasswordBoolean = false;
          this.form.reset();
          this.goto('auth/login');
          this.snackBarService.success('Password Reset Successfully');
        },
        (err: any) => {
          this.resetPasswordBoolean = false;
          this.snackBarService.error(err.error.message);
        }
      );
    }
  }
  goto(url) {
    this.router.navigateByUrl(url);
  }
}
