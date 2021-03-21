import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutModalComponent } from '../../shared-module/Components/logout-modal/logout-modal.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private utils: UtilsService,
    private dialog: MatDialog,
    private cdRef: ChangeDetectorRef
  ) {}
  loading: Boolean = false;
  ngOnInit() {}
  openPopLogout() {
    const dialogRef = this.dialog.open(LogoutModalComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(() => {});
  }
  ngAfterContentChecked(): void {}
}
