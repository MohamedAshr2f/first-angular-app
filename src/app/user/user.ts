import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
let randomuser=Math.floor(Math.random()*DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
selecteduser=DUMMY_USERS[randomuser];
}
