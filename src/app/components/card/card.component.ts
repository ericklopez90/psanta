import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserResponse } from 'src/app/interfaces/userResponse.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() user!: UserResponse;
  @Output() editUser = new EventEmitter<UserResponse>();
  
  onEditClick() {
    this.editUser.emit(this.user);
  }
}
