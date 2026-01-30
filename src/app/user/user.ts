import { Component,Output,Input, EventEmitter } from '@angular/core';

interface userinfo {
  id :string;
  avatar :string;
  name :string;  
}
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {

@Input() user!: userinfo;
@Output() userselected=new EventEmitter();

get imagePath(){
  return 'assets/users/'+this.user.avatar;
}
onselectuser(){
 this.userselected.emit(this.user.id);
}
}
