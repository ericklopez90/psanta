import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserResponse } from 'src/app/interfaces/userResponse.interface';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  userList: UserResponse[] = []
  userSubScriptions!: Subscription;
  p: number = 1;

  constructor(private userService:UserServiceService) {}

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

}
