import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserResponse } from 'src/app/interfaces/userResponse.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  @Input() user!: UserResponse;
  userForm!: FormGroup;
  @Output() userUpdated = new EventEmitter<any>();
  @Output() userDeleted = new EventEmitter<UserResponse>()

  constructor(private activeModal: NgbActiveModal,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: [this.user ? this.user.name : '', Validators.required],
      email: [this.user ? this.user.email : '', [Validators.required, Validators.email]],
      body: [this.user ? this.user.body : '', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const updatedUser = { ...this.user, ...this.userForm.value };
      this.userUpdated.emit(updatedUser);
      this.activeModal.close('close click')
    }
  }

  onDeleteClick() {
    this.userDeleted.emit(this.user);
    this.activeModal.close('delete click');
  }

}
