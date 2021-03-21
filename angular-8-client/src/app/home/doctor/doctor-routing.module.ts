import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'doctor-list',
    component: DoctorListComponent,
  },
  {
    path: 'doctor-list',
    component: DoctorListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
