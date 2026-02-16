import { Component,Output,Input, EventEmitter } from '@angular/core';

import { userinfo } from './user.model';
import { Card } from "../shared/card/card";
@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {

@Input() user!: userinfo;
@Input() selected!:boolean;
@Output() userselected=new EventEmitter();

get imagePath(){
  return 'assets/users/'+this.user.avatar;
}
onselectuser(){
 this.userselected.emit(this.user.id);
}
}
