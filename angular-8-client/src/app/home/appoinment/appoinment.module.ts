import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppoinmentRoutingModule } from './appoinment-routing.module';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { AppoinmentListComponent } from './appoinment-list/appoinment-list.component';
import { AppoinmentAddComponent } from './appoinment-add/appoinment-add.component';
import { AppoinmentUpdateComponent } from './appoinment-update/appoinment-update.component';
import { AppoinmentDeleteComponent } from './appoinment-delete/appoinment-delete.component';

@NgModule({
  declarations: [
    AppoinmentListComponent,
    AppoinmentAddComponent,
    AppoinmentUpdateComponent,
    AppoinmentDeleteComponent,
  ],
  imports: [CommonModule, SharedModule, AppoinmentRoutingModule],
})
export class AppoinmentModule {}
