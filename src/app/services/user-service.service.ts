import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse } from '../interfaces/userResponse.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = "https://jsonplaceholder.typicode.com/comments"

  constructor(private http: HttpClient) { }

  getUserList(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(this.apiUrl)
  }

}
