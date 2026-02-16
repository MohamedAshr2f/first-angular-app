import { Component, Output, EventEmitter, output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskModel } from '../onetask/onetask.model';
import { inject } from '@angular/core';
import { taskservice } from '../task.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {

  @Input() u_id!:string;
  @Output() close = new EventEmitter<void>();
 // @Output() add = new EventEmitter<NewTaskModel>();
  enteredtitle='';
  enteredsummary='';
  enteredduedate='';
  private taskservice=inject(taskservice);
onsubmit(){
/*this.add.emit({
  title:this.enteredtitle,
  summary:this.enteredsummary,
  duedate:this.enteredduedate 
});*/
this.taskservice.addTask({
  title:this.enteredtitle,
  summary:this.enteredsummary,
  duedate:this.enteredduedate 
},this.u_id);
}
onclose(){
  this.close.emit();
}

}
