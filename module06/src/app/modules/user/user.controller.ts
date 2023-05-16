import { Request, Response } from "express";
import { createUserDB } from "./user.service";

export const createUser = async (req : Request, res : Response ) => {
    const user = await createUserDB()
    res.status(200).json({
        status: 'Success',
        data: user
    });
}
export default createUser;
/*  
    Pattern 
    Route -> Controller -> service 
*/