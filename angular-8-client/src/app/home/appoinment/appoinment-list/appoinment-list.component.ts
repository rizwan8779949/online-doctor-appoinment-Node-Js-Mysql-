import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { AppoinmentAddComponent } from '../appoinment-add/appoinment-add.component';
import { AppoinmentUpdateComponent } from '../appoinment-update/appoinment-update.component';
import { AppoinmentDeleteComponent } from '../appoinment-delete/appoinment-delete.component';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';
@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.scss'],
})
export class AppoinmentListComponent implements OnInit {
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
      .commonGetMethod(this.paginationObj, 'appoinments/allList')
      .subscribe((res: any) => {
        this.listDto = res.content;
      });
  }

  refreshList() {
    this.getPaginationList();
  }
  addModal() {
    const dialogRef = this.dialog.open(AppoinmentAddComponent, {
      disableClose: true,
      width: '350px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshList();
    });
  }
  editModal(data) {
    const dialogRef = this.dialog.open(AppoinmentUpdateComponent, {
      disableClose: true,
      width: '350px',
      data: data,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshList();
    });
  }
  deleteModal(data) {
    const dialogRef = this.dialog.open(AppoinmentDeleteComponent, {
      disableClose: true,
      data: data,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshList();
    });
  }
}
