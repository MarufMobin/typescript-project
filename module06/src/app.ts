import express, { Application, Request, Response } from "express"
import cors from "cors"
// import { Schema, model } from "mongoose";
const app : Application = express()

// Application Route 
import userRoutes from './app/modules/user/user.route';

// using cors
app.use(cors())

// Parse Data
app.use( express.json());
app.use( express.urlencoded( { extended: true } ) );

//  Here the Routes
// app.get('/', (req : Request, res : Response ) => {
//     // Inserting a test data into mongodb
//     /* 
//         step 1: interface 
//         step 2: Schema
//         step 3: Model 
//         step 4: database query
//     */

//     // res.send('Hello World!')
    
//     /* // Creating an interface
//     interface IUser{
//         id: string;
//         role: "student";
//         password: string;
//         name: {
//             firstName: string,
//             middleName?: string,
//             lastName: string
//         };
//         dateOfBirth?: string;
//         gender: "male" | "female";
//         email?: string;
//         contactNo: string;
//         emergencyContactNo: string;
//         presentAddress: string;
//         permanentAddress: string;
//     } */
//    /*  // Creating Schema using Interface
//     const userSchema = new Schema<IUser>({
//         id: { type : String, required: true , unique: true },
//         role: { type: String, required: true },      
//         password: { type: String, required: true },      
//         name: { 
//             firstName:{
//                 type: String,
//                 required: true
//             },
//             middleName:{
//                 type:String,
//             },
//             lastName:{
//                 type: String,
//                 required: true
//             }
//          },   
//         dateOfBirth: { type: String, required: true },
//         gender: { type: String, enum: ["male" , "female"]},
//         email: {type: String },
//         contactNo: {type : String, required: true },
//         emergencyContactNo: {type: String, required: true },
//         presentAddress: {type: String, required: true },
//         permanentAddress: {type: String, required: true },
        
//     })
//     const User = model<IUser>('user',  userSchema ); */
    
//     // const dataSend = async () =>{
//     //     const user = new User({
//     //         id: '118',
//     //         role: 'student',      
//     //         password: 'abcpasword',      
//     //         name: { 
//     //             firstName: 'haider',
//     //             middleName:'mawla',
//     //             lastName:'karbala'
//     //         },   
//     //         dateOfBirth: '2000',
//     //         gender: 'male',
//     //         email: 'mobinh264@gmail.com',
//     //         contactNo: '01322409861',
//     //         emergencyContactNo: '01322409865',
//     //         presentAddress: 'Dhaka',
//     //         permanentAddress: "Bogura",
//     //     })
//     //     await user.save();
//     //     console.log(user);
//     // }
//     // dataSend()
    
// });

/* All end points are here */
// app.get('/api/v1/user', userRoutes)
app.use('/api/v1/user', userRoutes)

export default app;  