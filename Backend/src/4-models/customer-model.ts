import Joi from "joi";

class CustomerModel {
    
    public customer_id: number;
    public name: string;
    public occupation: string;
    public phone: string;
    public email: string;
  

    public constructor(customer: CustomerModel) {
        this.customer_id = customer.customer_id;
        this.name = customer.name;
        this.occupation = customer.occupation;
        this.phone = customer.phone;
        this.email = customer.email;
   
    }

    public static validationSchema = Joi.object({
        customer_id: Joi.number().required().integer().positive(),
        name: Joi.string().required().min(2).max(30),
        occupation: Joi.string().required().min(2).max(30),
        phone: Joi.number().required().positive().min(1),
        email: Joi.string().required().min(4).max(30),

    });

    public valiemail(): string {
        const result = CustomerModel.validationSchema.validate(this);
        return result.error?.message;
    }

}

export default CustomerModel;