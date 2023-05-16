import User from './user.model';

export const createUserDB = async () =>{
    const user = await new User({
        id: '8001',
        role: 'student',      
        password: 'kgf',      
        name: { 
            firstName: 'Mr Rocky',
            middleName:'handsome',
            lastName:'without frontend'
        },   
        dateOfBirth: '2000',
        gender: 'male',
        email: 'mobinh264@gmail.com',
        contactNo: '01322409861',
        emergencyContactNo: '01322409865',
        presentAddress: 'Dhaka',
        permanentAddress: "Bogura",
    })
    await user.save();
    return user;
}