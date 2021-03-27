import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { LoginService } from 'src/app/shared-module/Services/login/login.service';

import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private api: ApiService,
    private snackBarService: SnackBarService,
    private utils: UtilsService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  loginButtonDisabled: Boolean = false;
  loading: boolean = false;
  roleNames = [
    { value: 'staff', viewValue: 'Staff' },
    { value: 'doctor', viewValue: 'Doctor' },
    { value: 'patient', viewValue: 'Patient' },
  ];
  ngOnInit() {
    this.form = this.formBuilder.group({
      userName: [null, Validators.required],
      roleName: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
  checkLoginData() {
    if (this.form.valid) {
      this.submitLoginData();
    }
  }
  submitLoginData() {
    this.loginButtonDisabled = true;
    if (this.loginButtonDisabled) {
      this.api.commonPostMethod(this.form.value, 'commonLogin/login').subscribe(
        (res: any) => {
          this.loginButtonDisabled = false;
          this.loading = false;
          if (this.form.value.roleName == 'doctor')
            this.getUserDetais('doctors/findByPhoneNo');
          else if (this.form.value.roleName == 'patient')
            this.getUserDetais('doctor/findByPhoneNo/');
          else if (this.form.value.roleName == 'staff') {
            // this.getUserDetais('doctor/findByPhoneNo')
          }
          // this.snackBarService.success('You have Logged in Successfullly');
          // localStorage.setItem('userData', JSON.stringify(res.data));
          // this.router.navigateByUrl('home');
        },
        (err: any) => {
          this.loginButtonDisabled = false;
          this.snackBarService.error(err?.error?.message);
        }
      );
    }
  }
  goto(url) {
    this.router.navigateByUrl(url);
  }
  getUserDetais(url) {
    let params = {};
    params['phoneNo'] = this.form.value.userName;
    this.api.commonGetMethod(params, url).subscribe(
      (res: any) => {
        this.loginButtonDisabled = false;
        this.loading = false;
        this.snackBarService.success('You have Logged in Successfullly');
        localStorage.setItem('userData', JSON.stringify(res.userDetails));
        this.router.navigateByUrl('home');
      },
      (err: any) => {
        this.loginButtonDisabled = false;
        this.snackBarService.error(err?.error?.message);
      }
    );
  }
}
class LoginData {
  username;
  password;
}
