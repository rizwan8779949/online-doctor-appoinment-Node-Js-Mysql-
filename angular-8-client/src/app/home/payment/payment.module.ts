import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRoutingModule } from './payment-routing.module';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { PaymentAddComponent } from './payment-add/payment-add.component';
import { PaymentListComponent } from './payment-list/payment-list.component';

@NgModule({
  declarations: [PaymentListComponent, PaymentAddComponent],
  imports: [CommonModule, SharedModule, PaymentRoutingModule],
})
export class PaymentModule {}
