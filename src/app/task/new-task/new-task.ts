import { Component, Output, EventEmitter, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskModel } from '../onetask/onetask.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {

  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskModel>();
  enteredtitle='';
  enteredsummary='';
  enteredduedate='';
onsubmit(){
this.add.emit({
  title:this.enteredtitle,
  summary:this.enteredsummary,
  duedate:this.enteredduedate 
});
}
  onclose(){
    this.close.emit();
  }
}
