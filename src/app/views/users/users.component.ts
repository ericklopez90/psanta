import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { UserResponse } from 'src/app/interfaces/userResponse.interface';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  user!: UserResponse;
  userList: UserResponse[] = []
  userSubScriptions!: Subscription;
  p: number = 1;

  constructor(private modalService: NgbModal,
              private userService:UserServiceService) {}

  ngOnInit(): void {
    this.getUsers()
  }

  ngOnDestroy(): void {
    if (this.userSubScriptions) {
    this.userSubScriptions.unsubscribe();
    }
  }

  getUsers(){
    const sub = this.userService.getUserList()
    .subscribe((response: UserResponse[]) =>{
      this.userList = response;
      this.userSubScriptions = sub;
    })
  }

  onEditUser(user: UserResponse) {
    this.openUserModal(user);
  }

  openUserModal(user?: any) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.user = user;

    modalRef.componentInstance.userUpdated.subscribe((updatedUser: UserResponse) => {
      if (user) {
        const index = this.userList.indexOf(user);
        this.userList[index] = updatedUser;
      } else {
        this.userList.unshift(updatedUser);
      }
    });

    modalRef.componentInstance.userDeleted.subscribe((userToDelete: UserResponse) => {
      if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
        const index = this.userList.findIndex(u => u.id === userToDelete.id);
        if (index > -1) {
          this.userList.splice(index, 1);
        }
      }
    });
  }

}
