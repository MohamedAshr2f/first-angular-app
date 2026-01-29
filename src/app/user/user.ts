import { Component,Output,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
//@Input() id!:string;
//@Input({required:true}) avatar!:string;
//@Input() name!:string;
@Input() user!:{
  id :string;
  avatar :string;
  name :string;  
};
@Output() userselected=new EventEmitter();

get imagePath(){
  return 'assets/users/'+this.user.avatar;
}
onselectuser(){
 this.userselected.emit(this.user.id);
}
}
