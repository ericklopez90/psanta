import { Component, Input } from '@angular/core';
import { UserResponse } from 'src/app/interfaces/userResponse.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() user!: UserResponse;



}
