import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberUpdateComponent } from './member-update/member-update.component';
import { MemberDeleteComponent } from './member-delete/member-delete.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { MemberRoutingModule } from './member-routing.module';

@NgModule({
  declarations: [
    MemberListComponent,
    MemberAddComponent,
    MemberUpdateComponent,
    MemberDeleteComponent,
  ],
  imports: [CommonModule, SharedModule, MemberRoutingModule],
})
export class MemberModule {}
