import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { DoctorAddComponent } from '../doctor-add/doctor-add.component';
import { DoctorUpdateComponent } from '../doctor-update/doctor-update.component';
import { DoctorDeleteComponent } from '../doctor-delete/doctor-delete.component';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit {
  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private router: Router,
    private snackBarService: SnackBarService,
    private dialog: MatDialog
  ) {}
  paginationObj = {
    page: 1,
    limit: '10',
  };
  listDto = new Array();
  ngOnInit() {
    this.getPaginationList();
  }

  getPaginationList() {
    this.api
      .commonGetMethod(this.paginationObj, 'doctors/allList')
      .subscribe((res: any) => {
        this.listDto = res.content;
      });
  }

  refreshList() {
    this.getPaginationList();
  }
  addModal() {
    const dialogRef = this.dialog.open(DoctorAddComponent, {
      disableClose: true,
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshList();
    });
  }
  editModal(data) {
    const dialogRef = this.dialog.open(DoctorUpdateComponent, {
      disableClose: true,
      width: '450px',
      data: data,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshList();
    });
  }
  deleteModal(data) {
    const dialogRef = this.dialog.open(DoctorDeleteComponent, {
      disableClose: true,
      data: data,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshList();
    });
  }
}
