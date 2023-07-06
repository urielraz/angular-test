import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import fileHendler from "../2-utils/fileHendler";
import { v4 as uuidv4 } from "uuid";

import { ResourceNotFoundErrorModel, ValidationErrorModel } from "../4-models/error-models";

import CustomerModel from "../4-models/customer-model";
import TaskModel from "../4-models/task-model";



async function getAllCustomers(): Promise<CustomerModel[]> {
    const sql = `SELECT * FROM customers `;
    const data = await dal.execute( sql )
 
    return data;
}
async function getAllTasks(): Promise<TaskModel[]> {
    const sql = `SELECT * FROM tasks`;
    const data = await dal.execute( sql )
 
    return data;
}
// async function getAllTasksByCustomer(customer_id:number): Promise<TaskModel[]> {
//     const sql = `SELECT * FROM tasks WHERE customer_id = ${customer_id}`;
//     const data = await dal.execute( sql )
 
//     return data;
// }

async function postNewTask(taskModel:TaskModel): Promise<TaskModel> {
    const sql = `INSERT INTO tasks VALUES (DEFAULT, '${taskModel.description}', CURRENT_TIMESTAMP(), '${taskModel.customer_id}', DEFAULT)`;
    const data = await dal.execute( sql )
 
    return data;
}

async function delTask(taskNum:number): Promise<void> {
    const sql = `DELETE FROM tasks WHERE id = ${taskNum}`;
    const data = await dal.execute( sql )
 
    return data;
}

async function taskDone(taskNum:number): Promise<TaskModel> {
    const sql = `UPDATE tasks SET if_done = 1 WHERE id = ${taskNum} `;
    const data = await dal.execute( sql )
    return data;
}






export default {
    getAllCustomers,
    getAllTasks,
    postNewTask,
    delTask,
    taskDone
}