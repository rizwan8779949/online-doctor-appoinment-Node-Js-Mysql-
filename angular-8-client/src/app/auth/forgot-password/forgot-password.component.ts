import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { LoginService } from 'src/app/shared-module/Services/login/login.service';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';
export function patternValidator(regexp: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const value = control.value;
    if (value === '') {
      return null;
    }
    return !regexp.test(value) ? { patternInvalid: { regexp } } : null;
  };
}
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup;
  constructor(
    private api: ApiService,
    private loginService: LoginService,
    private utils: UtilsService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService
  ) {}
  forgotPasswordSentMailBoolean: Boolean = false;
  mailSendSuccessfully: Boolean = false;
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [
        null,
        Validators.required,
        // patternValidator(
        //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        // ),
      ],
    });
  }
  checkForgotPasswordData() {
    if (this.form.valid) this.submitForgotPasswordMail();
  }
  callApi() {
    this.mailSendSuccessfully = true;
    this.goto('auth/reset-password');
  }
  submitForgotPasswordMail() {
    if (!this.forgotPasswordSentMailBoolean) {
      this.forgotPasswordSentMailBoolean = true;
      this.api.commonPostMethod(this.form.value, '').subscribe(
        (res: any) => {
          // this.mailSendSuccessfully = true;
          this.forgotPasswordSentMailBoolean = false;
          this.loginService.setEditData(res.data.resetToken);
          this.snackBarService.success(res['message']);
          this.goto('auth/reset-password');
        },
        (err: any) => {
          this.forgotPasswordSentMailBoolean = false;
          this.snackBarService.error(err?.error?.message);
        }
      );
    }
  }
  goto(url) {
    this.router.navigateByUrl(url);
  }
}
