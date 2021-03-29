import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared-module/Services/api/api.service';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PaymentAddComponent } from '../payment-add/payment-add.component';
import { SnackBarService } from 'src/app/shared-module/Services/snackBar/snack-bar.service';
@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss'],
})
export class PaymentListComponent implements OnInit {
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
      .commonGetMethod(this.paginationObj, 'payment/allList')
      .subscribe((res: any) => {
        this.listDto = res.content;
      });
  }

  refreshList() {
    this.getPaginationList();
  }
  addModal() {
    const dialogRef = this.dialog.open(PaymentAddComponent, {
      disableClose: true,
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshList();
    });
  }
}
