import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentListComponent } from './payment-list/payment-list.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'payment-list',
    component: PaymentListComponent,
  },
  {
    path: 'payment-list',
    component: PaymentListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}
