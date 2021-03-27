import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [],
})
export class HomeModule {}
