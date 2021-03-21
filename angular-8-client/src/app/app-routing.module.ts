import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFailedGuard } from './shared-module/Guard/LoginFailed/login-failed.guard';
import { LoginSucesssGuard } from './shared-module/Guard/LoginSucesss/login-sucesss.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [LoginFailedGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [LoginSucesssGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
