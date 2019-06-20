import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  create(user: User) {
    return this.http.post('http://localhost:3000' + '/user' , user );
  }

  getUser(user: User) {
    return this.http.get('http://localhost:3000' + '/user/' + user.userName + '/' + user.password );
  }
}
