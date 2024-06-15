import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { TruncatePipe } from 'src/app/pipe/truncate.pipe';



@NgModule({
  declarations: [
    CardComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [CardComponent]
})
export class CardModule { }
