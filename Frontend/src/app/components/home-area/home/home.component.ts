import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { TaskModel } from 'src/app/models/task.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public constructor(private dataService:DataService){}

  public allCustomers:CustomerModel[];
  public allTasks:TaskModel[];

  public async ngOnInit():Promise<void>
  {
    try {
      this.allCustomers = await this.dataService.getAllCustomers();
      this.allTasks = await this.dataService.getAllTasks();
      
    } catch (error) {
      console.log(error);
      
    }
  }

  public async del(taskNum:number):Promise<void>{
    console.log(taskNum);
    if(!window.confirm('Are You Sure?')) return;
    try {
      
      await this.dataService.delTask(taskNum);
      this.ngOnInit();

    } catch (error) {
      console.log(error);
      
    }
  }

  public async done(taskNum:number):Promise<void>{
    try {
      await this.dataService.taskDone(taskNum);
      this.ngOnInit();

    } catch (error) {
      console.log(error);
      
    }
  }


  // public async viewAccount(accountNumber:number): Promise<void>{
  //   try {
  //     this.OperationsByAccount = await this.dataService.getAllOperationsByAccount(accountNumber)
  //     console.log(this.OperationsByAccount);

  //   } catch (error) {
  //     throw new Error('Method not implemented.');
  //   }
  // }
 

}
