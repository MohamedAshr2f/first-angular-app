import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Task } from "./task/task";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users=DUMMY_USERS;
  selectedUserId?:string;
  protected readonly title = signal('first-angular-app');
  get selectedUser(){
    return this.users.find(u=>u.id===this.selectedUserId);
  }
  onselectuser(userId:string){
    this.selectedUserId=userId;
    console.log("selected user id:",userId);
  }
}
