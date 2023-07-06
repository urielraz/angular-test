import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

    private baseUrl = "http://localhost:3001/api/"
    public getAllCustomers = this.baseUrl + "getAllCustomers/"
    public getAllTasks = this.baseUrl + "getAllTasks/"
    public postNewTask = this.baseUrl + "postNewTask/"
    public delTask = this.baseUrl + "delTask/"
    public taskDone = this.baseUrl + "taskDone/"

}
