import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormSubmitComponent } from './form-submit/form-submit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'submit-form',
    pathMatch: 'full',
  },
  {
    path: 'submit-form',
    component: FormSubmitComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
