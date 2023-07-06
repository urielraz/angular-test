import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';
import { TaskModel } from 'src/app/models/task.model';
import { CustomerModel } from 'src/app/models/customer.model';


@Component({
  selector: 'app-actions-area',
  templateUrl: './actions-area.component.html',
  styleUrls: ['./actions-area.component.css']
})
export class ActionsAreaComponent implements OnInit {

  public constructor(
    private dataService: DataService,
    public toastr: ToastrService
    ){}

    public allCustomers:CustomerModel[];
  
    public async ngOnInit():Promise<void>
    {
      try {
        this.allCustomers = await this.dataService.getAllCustomers();
    } catch (error) {
      
      throw new Error('Method not implemented.');
    }
  }


  public task = new TaskModel();


  public async send():Promise<void>{

      try {
          
          console.log(this.task);
          // if(this.task.type!=="Loan"){
          //   this.task.interest=0
          //   this.task.payments=0

          // }
          const newtask = await this.dataService.postNewTask( this.task )
          console.log(this.task);
          alert('the task : ' + this.task.description + ' for the customer  ' + this.task.customer_id + ' complitlty added!!' );   



      } catch (error:any) {
          alert("שגיאה")
      }

  }

}
