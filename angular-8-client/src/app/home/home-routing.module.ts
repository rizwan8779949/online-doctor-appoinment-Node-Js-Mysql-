import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
const routes: Routes = [
  {
    path: '',
    component: SideNavComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'doctor',
        loadChildren: () =>
          import('./doctor/doctor.module').then((m) => m.DoctorModule),
      },
      {
        path: 'patient',
        loadChildren: () =>
          import('./patient/patient.module').then((m) => m.PatientModule),
      },
      {
        path: 'appointment',
        loadChildren: () =>
          import('./appoinment/appoinment.module').then(
            (m) => m.AppoinmentModule
          ),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('./payment/payment.module').then((m) => m.PaymentModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
