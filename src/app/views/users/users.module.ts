import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgxPaginationModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
