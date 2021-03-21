import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { FormRoutingModule } from './form-routing.module';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  declarations: [FormSubmitComponent],
  imports: [CommonModule, FormRoutingModule, SharedModule],
})
export class FormSubmitModule {}
