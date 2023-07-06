import express, {Request, Response, NextFunction } from "express";
import dataLogic from "../5-logic/data-logic";
import TaskModel from "../4-models/task-model";

const router = express.Router() 


router.get('/getAllCustomers/', async( request: Request, response : Response, next : NextFunction ) => {

    try {
        const data = await dataLogic.getAllCustomers();
        response.json(data)
        
    } catch (error) {
        next(error)
    }

}) 
router.get('/getAllTasks/', async( request: Request, response : Response, next : NextFunction ) => {

    try {
        const data = await dataLogic.getAllTasks();
        response.json(data)
        
    } catch (error) {
        next(error)
    }

})
router.post('/postNewTask', async( request: Request, response : Response, next : NextFunction ) => {

    try {
        
        const task = new TaskModel(request.body);
        const newTask = await dataLogic.postNewTask(task);
        response.status(201).json(newTask)
    } catch (error) {
        next(error)
    }

}
)
router.delete('/delTask/:taskNum([0-9]+)', async( request: Request, response : Response, next : NextFunction ) => {

    try {

        const taskNum = +request.params.taskNum
        await dataLogic.delTask(taskNum);
        response.sendStatus(204)
    } catch (error) {
        next(error)
    }

})

router.patch("/taskDone/:task_id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const task_id = +request.params.task_id;

        const updateTask = await dataLogic.taskDone(task_id);
        response.json(updateTask);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;