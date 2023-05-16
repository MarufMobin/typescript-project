import { Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>

 // Creating Schema using Interface
 const userSchema = new Schema<IUser, UserModel, IUserMethods >({
    id: { type : String, required: true , unique: true },
    role: { type: String, required: true },      
    password: { type: String, required: true },      
    name: { 
        firstName:{
            type: String,
            required: true
        },
        middleName:{
            type:String,
        },
        lastName:{
            type: String,
            required: true
        }
     },   
    dateOfBirth: { type: String, required: true },
    gender: { type: String, enum: ["male" , "female"]},
    email: {type: String },
    contactNo: {type : String, required: true },
    emergencyContactNo: {type: String, required: true },
    presentAddress: {type: String, required: true },
    permanentAddress: {type: String, required: true },
})

userSchema.method("fullName", function fullName(){
    return this.name.firstName + " " + this.name.lastName
});

userSchema.static('getAdminUsers', async function getAdminUsers(){
    const admins = await this.find({role: 'admin'})
})

const User = model<IUser, UserModel>('user',  userSchema );

export default User;


/* 
    Break Down 
    -> interface -> interface.ts
    -> Schema , model -> model.ts
    -> route-> route.ts
    -> route function -> Controller.ts
    -> Database Query function -> service.ts
*/

/* 
    instance methods --> instance er methods 
    class -> instance + method -> instance methods
*/