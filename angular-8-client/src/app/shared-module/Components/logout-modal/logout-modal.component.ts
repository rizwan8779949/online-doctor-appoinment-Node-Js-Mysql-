import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss'],
})
export class LogoutModalComponent implements OnInit {
  constructor(
    private router: Router,
    private utils: UtilsService,
    private matDialogRef: MatDialogRef<LogoutModalComponent>
  ) {}
  userData;
  ngOnInit(): void {
    this.userData = this.utils.getUserDetailsLogin();
  }
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('auth');
    this.matDialogRef.close();
  }
  close() {
    this.matDialogRef.close();
  }
}
