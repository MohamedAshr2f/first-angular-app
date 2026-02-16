import { Component, input, Input } from '@angular/core';
import { Onetask } from './onetask/onetask';
import { NewTask } from './new-task/new-task';
import { type NewTaskModel } from './onetask/onetask.model';
import { taskservice } from './task.service';


@Component({
  selector: 'app-task',
  imports: [Onetask,NewTask],
  templateUrl: './task.html',
  styleUrl: './task.css',

})
export class Task {
@Input() u_id!:string;
@Input() name?:string;
@Input() avatar?:string;
isadding=false;
private taskservice:taskservice;
constructor(taskservice:taskservice){
  this.taskservice=taskservice;
}

get imagePath(){
  return 'assets/users/'+this.avatar;
}
get selectedUserTasks(){
  return this.taskservice.getTasksByUserId(this.u_id);
}
oncompleteTask(taskId:string){
  this.taskservice.deleteTask(taskId);
}
oncloseTask(){
  this.isadding=false;
}
onstartaddTask(){
  this.isadding=true;
}
onaddTask(NewTaskModel:NewTaskModel){
 //this.taskservice.addTask(NewTaskModel,this.u_id);
  this.isadding=false;
}
}
