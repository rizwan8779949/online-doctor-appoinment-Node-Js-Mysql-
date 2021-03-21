import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorUpdateComponent } from './doctor-update/doctor-update.component';
import { DoctorDeleteComponent } from './doctor-delete/doctor-delete.component';

@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorAddComponent,
    DoctorUpdateComponent,
    DoctorDeleteComponent,
  ],
  imports: [CommonModule, SharedModule, DoctorRoutingModule],
})
export class DoctorModule {}
