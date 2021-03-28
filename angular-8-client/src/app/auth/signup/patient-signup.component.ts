import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { LoginService } from 'src/app/shared-module/Services/login/login.service';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';

import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.scss'],
})
export class PatientSignupComponent implements OnInit {
  form: FormGroup;
  constructor(
    private api: ApiService,
    private snackBarService: SnackBarService,
    private utils: UtilsService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  loading: Boolean = false;
  ngOnInit() {
    this.form = this.formBuilder.group({
      patientName: [null, Validators.required],
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
    });
  }
  checksubmitFormData() {
    if (this.form.valid) {
      this.checkPhoneNumberNotAlreadyExist();
    }
  }
  submitLoginData() {
    if (!this.loading) {
      this.loading = true;
      this.api.commonPostMethod(this.form.value, 'patient/create').subscribe(
        (res: any) => {
          this.loading = false;
          this.createSaveSignUpDataForLogin();
          // this.snackBarService.success(res['message']);
          // this.form.reset();
        },
        (err: any) => {
          this.loading = false;
          this.snackBarService.error(err?.error?.message);
        }
      );
    }
  }
  goto(url) {
    this.router.navigateByUrl(url);
  }
  createSaveSignUpDataForLogin() {
    var signUpDataForLogin = {
      userName: this.form.controls.phoneNo.value,
      roleName: 'patient',
      password: this.form.controls.password.value,
    };
    this.api
      .commonPostMethod(signUpDataForLogin, 'commonLogin/create')
      .subscribe(
        (res: any) => {
          this.loading = false;
          this.submitLoginData();
          this.snackBarService.success('Signup Successfully');
          this.goto('auth/login');
          this.form.reset();
        },
        (err: any) => {
          this.loading = false;
          if (err?.error?.message == 'Validation error')
            this.snackBarService.error('Phone No. already exists.');
        }
      );
  }
  checkPhoneNumberNotAlreadyExist() {
    if (this.form.controls.phoneNo.value) {
      var phoneNo = this.form.controls.phoneNo.value;
      let params = {};
      params['phoneNo'] = phoneNo;
      this.api
        .commonGetMethod(params, 'patient/findByPhoneNo')
        .subscribe((res: any) => {
          if (res?.data)
            this.snackBarService.error('Phone No. already exists.');
          else {
            this.createSaveSignUpDataForLogin();
          }
        });
    }
  }
}
