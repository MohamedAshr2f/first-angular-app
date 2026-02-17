import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { OnetaskModel } from './onetask.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { taskservice } from '../task.service';
@Component({
  selector: 'app-onetask',
  imports: [Card,DatePipe],
  templateUrl: './onetask.html',
  styleUrl: './onetask.css',
})
export class Onetask {
@Input() u_task!:OnetaskModel;
private taskservice=inject(taskservice);
oncomplete(){
  this.taskservice.deleteTask(this.u_task.id);
}

}
