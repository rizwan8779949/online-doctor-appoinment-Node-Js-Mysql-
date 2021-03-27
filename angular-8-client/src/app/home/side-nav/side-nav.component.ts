import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutModalComponent } from '../../shared-module/Components/logout-modal/logout-modal.component';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
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
