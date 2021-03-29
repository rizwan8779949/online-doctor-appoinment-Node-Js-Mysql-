import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { PatientAddComponent } from '../patient-add/patient-add.component';
import { PatientDeleteComponent } from '../patient-delete/patient-delete.component';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';
import { PatientUpdateComponent } from '../patient-update/patient-update.component';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
})
export class PatientListComponent implements OnInit {
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
      .commonGetMethod(this.paginationObj, 'patient/allList')
      .subscribe((res: any) => {
        this.listDto = res.content;
      });
  }

  refreshList() {
    this.getPaginationList();
  }
  addModal() {
    const dialogRef = this.dialog.open(PatientAddComponent, {
      disableClose: true,
      width: '350px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshList();
    });
  }
  editModal(data) {
    const dialogRef = this.dialog.open(PatientUpdateComponent, {
      disableClose: true,
      width: '350px',
      data: data,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshList();
    });
  }
  deleteModal(data) {
    const dialogRef = this.dialog.open(PatientDeleteComponent, {
      disableClose: true,
      data: data,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshList();
    });
  }
}
