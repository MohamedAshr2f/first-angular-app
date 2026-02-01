import { Component, Input } from '@angular/core';
import { OnetaskModel } from './onetask.model';
@Component({
  selector: 'app-onetask',
  imports: [],
  templateUrl: './onetask.html',
  styleUrl: './onetask.css',
})
export class Onetask {
@Input() u_task?:OnetaskModel;

}
