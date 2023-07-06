import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../utils/config.service';
import { BehaviorSubject, Subject, firstValueFrom } from "rxjs";
import { CustomerModel } from '../models/customer.model';
import { TaskModel } from '../models/task.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

    public constructor( private http:HttpClient, private config: ConfigService) { }

    public async getAllCustomers(): Promise<CustomerModel[]>{
      const observable = this.http.get<CustomerModel[]>( this.config.getAllCustomers);
      const customers = await firstValueFrom(observable);
      return customers;
  }

    public async getAllTasks(): Promise<TaskModel[]>{
      const observable = this.http.get<TaskModel[]>( this.config.getAllTasks);
      const tasks = await firstValueFrom(observable);
      return tasks;
  }

  public async postNewTask( taskModel: TaskModel ):Promise<TaskModel> {

    const formData = new FormData();
    formData.append('description', taskModel.description );
    formData.append('customer_id', taskModel.customer_id.toString() );

    const observable = this.http.post<TaskModel>(this.config.postNewTask, formData );
    const addedTask = await firstValueFrom( observable );
    return addedTask;
}

public async delTask(taskNum:number): Promise<void>{
  const observable = this.http.delete<TaskModel>( this.config.delTask + taskNum);
  await firstValueFrom(observable);
}

public async taskDone(taskNum:number): Promise<void>{
  
  const formData = new FormData();
  formData.append('if_done', "1" );
  const observable = this.http.patch<void>( this.config.taskDone + taskNum, formData);
  await firstValueFrom(observable);
}

}
