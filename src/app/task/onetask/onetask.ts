import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnetaskModel } from './onetask.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-onetask',
  imports: [Card,DatePipe],
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
