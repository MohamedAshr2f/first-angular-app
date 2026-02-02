import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnetaskModel } from './onetask.model';
@Component({
  selector: 'app-onetask',
  imports: [],
  templateUrl: './onetask.html',
  styleUrl: './onetask.css',
})
export class Onetask {
@Input() u_task!:OnetaskModel;
@Output() complete=new EventEmitter();
oncomplete(){
  this.complete.emit(this.u_task.id);
}

}
