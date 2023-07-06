import Joi from "joi";

class TaskModel {
    
    public id: number;
    public description: string;
    public date: string;
    public customer_id: number;
    public if_done: boolean;
  

    public constructor(task: TaskModel) {
        this.id = task.id;
        this.description = task.description;
        this.date = task.date;
        this.customer_id = task.customer_id;
        this.if_done = task.if_done;
   
    }

    public static validationSchema = Joi.object({
        id: Joi.number().required().integer().positive(),
        description: Joi.string().required().min(2).max(255),
        date: Joi.string().required().min(2).max(30),
        customer_id: Joi.number().required().integer().positive(),
        if_done: Joi.boolean(),

    });

    public valiif_done(): string {
        const result = TaskModel.validationSchema.validate(this);
        return result.error?.message;
    }

}

export default TaskModel;