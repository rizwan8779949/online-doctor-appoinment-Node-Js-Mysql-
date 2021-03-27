import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsListComponent } from './appoinment-list/forms-list.component';
import { CountsComponent } from './counts/counts.component';

@NgModule({
  declarations: [DashboardComponent, FormsListComponent, CountsComponent],
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
