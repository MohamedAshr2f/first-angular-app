import { Component, Input } from '@angular/core';
import { Onetask } from './onetask/onetask';

@Component({
  selector: 'app-task',
  imports: [Onetask],
  templateUrl: './task.html',
  styleUrl: './task.css',

})
export class Task {
@Input() name?:string;
@Input() avatar?:string;
get imagePath(){
  return 'assets/users/'+this.avatar;
}
}
