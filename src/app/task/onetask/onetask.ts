import { Component, Input } from '@angular/core';
interface OnetaskModel {
  id:string;
  userid:string;
  title:string;
  summary:string;
  duedate:string;
}
@Component({
  selector: 'app-onetask',
  imports: [],
  templateUrl: './onetask.html',
  styleUrl: './onetask.css',
})
export class Onetask {
@Input() u_task?:OnetaskModel;

}
