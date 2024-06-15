import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { TruncatePipe } from 'src/app/pipe/truncate.pipe';

import { ModalModule } from '../modal/modal.module';



@NgModule({
  declarations: [
    CardComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
