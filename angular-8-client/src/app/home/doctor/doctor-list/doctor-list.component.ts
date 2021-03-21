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
  page = 1;
  limit = '10';
  totalPages;
  listDto = new Array();
  totalElements;
  ngOnInit() {
    this.getPaginationList();
  }

  getPaginationList() {
    this.api.commonGetMethod(this.paginationObj, '').subscribe((res: any) => {
      this.listDto = res.data;
      this.totalPages = res.meta.totalPages;
      this.totalElements = res.meta.totalRecords;
    });
  }

  public paginationView(event: PageEvent) {
    this.page = event.pageIndex;
    this.getPaginationList();
  }
  refreshList() {
    this.page = 1;
    this.getPaginationList();
  }
  addDoctorModal() {
    const dialogRef = this.dialog.open(DoctorAddComponent, {
      disableClose: true,
      width: '350px',
      height: '100%',
      position: {
        right: '0',
      },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshList();
    });
  }
  editDoctorModal(data) {
    const dialogRef = this.dialog.open(DoctorUpdateComponent, {
      disableClose: true,
      width: '350px',
      height: '100%',
      position: {
        right: '0',
      },
      data: data,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshList();
    });
  }
  deleteDoctorModal(data) {
    const dialogRef = this.dialog.open(DoctorDeleteComponent, {
      disableClose: true,
      data: data,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshList();
    });
  }
}
