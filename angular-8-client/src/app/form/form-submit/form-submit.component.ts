import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { LoginService } from 'src/app/shared-module/Services/login/login.service';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';

import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.scss'],
})
export class FormSubmitComponent implements OnInit {
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
      // name: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      meetings: [0, Validators.required],
      referrals: [0, Validators.required],
      amount: [0, Validators.required],
      visitor: [0, Validators.required],
      testimonials: [0, Validators.required],
    });
  }
  checksubmitFormData() {
    if (this.form.valid) {
      this.submitLoginData();
    }
  }
  submitLoginData() {
    if (!this.loading) {
      this.loading = true;
      this.api.commonPostMethod(this.form.value, '').subscribe(
        (res: any) => {
          this.loading = false;
          this.snackBarService.success(res['msg']);
          this.form.reset();
        },
        (err: any) => {
          this.loading = false;
          this.snackBarService.error(err.error.message);
        }
      );
    }
  }
  goto(url) {
    this.router.navigateByUrl(url);
  }
}
