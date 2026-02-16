
import { type NewTaskModel } from './onetask/onetask.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class taskservice {
  private tasks=[
  {id:"t1",userid:"u1", title:'Setup Angular Project',summary:"Initialize new Angular project with CLI and configure build tools",duedate:"2024-03-12"},
  {id:"t2",userid:"u2", title:'Create Components',summary:"Build reusable Angular components with proper lifecycle hooks",duedate:"2024-08-17"},
  {id:"t4",userid:"u2", title:'Implement Services', summary:"Design services for data management and HTTP communication",duedate:"2024-05-03"},
  {id:"t5",userid:"u3", title:'Setup Routing', summary:"Configure Angular Router for navigation between components",duedate:"2024-09-28"},
  {id:"t6",userid:"u4", title:'Form Validation', summary:"Implement reactive and template-driven form validation",duedate:"2024-04-10"},
  {id:"t7",userid:"u3", title:'State Management', summary:"Integrate RxJS and manage application state with Observables",duedate:"2024-07-22"},
  {id:"t8",userid:"u3", title:'Deploy Application', summary:"Build and deploy Angular app to production environment",duedate:"2024-11-05"},
];

getTasksByUserId(userId:string){
  return this.tasks.filter(t=>t.userid===userId);   
}

addTask(NewTaskModel:NewTaskModel,userId:string){
this.tasks.unshift({
    id:new Date().getTime().toString(),
    userid:userId,
    title:NewTaskModel.title,
    summary:NewTaskModel.summary,
    duedate:NewTaskModel.duedate
  })
} 

deleteTask(taskId:string){
  this.tasks=this.tasks.filter(t=>t.id!==taskId);
}

}