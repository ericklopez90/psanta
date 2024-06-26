import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardModule } from 'src/app/components/card/card.module';
import { ModalModule } from 'src/app/components/modal/modal.module';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgxPaginationModule,
    CardModule,
    ModalModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
