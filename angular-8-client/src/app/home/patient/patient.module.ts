import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRoutingModule } from './patient-routing.module';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';

@NgModule({
  declarations: [
    PatientListComponent,
    PatientAddComponent,
    PatientUpdateComponent,
    PatientDeleteComponent,
  ],
  imports: [CommonModule, SharedModule, PatientRoutingModule],
})
export class PatientModule {}
