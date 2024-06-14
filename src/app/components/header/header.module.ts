import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ClockComponent } from './clock/clock.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ClockComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
