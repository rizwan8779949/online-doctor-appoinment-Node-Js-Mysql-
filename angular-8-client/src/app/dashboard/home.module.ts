import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './side-nav/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared-module/shared.module';
import { FormsModule } from '@angular/forms';
import { CountsComponent } from './dashboard/counts/counts.component';
import { FormsListComponent } from './dashboard/forms-list/forms-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    CountsComponent,
    FormsListComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [DashboardComponent],
})
export class HomeModule {}
