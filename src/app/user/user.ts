import { Component,signal,computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
let randomuser=Math.floor(Math.random()*DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
selecteduser=signal(DUMMY_USERS[randomuser]);
imagePath=computed(()=>{
  return 'assets/users/'+this.selecteduser().avatar;
});
/*get imagePath(){
  return 'assets/users/'+this.selecteduser().avatar;
}*/
selectuser(){
  randomuser=Math.floor(Math.random()*DUMMY_USERS.length);
  this.selecteduser.set(DUMMY_USERS[randomuser]);
}
}
