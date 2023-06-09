// Make A Combind Model 
interface Model<TData, TMethods>{
    data : TData,
    methods : TMethods
}

// Properties 
interface IUser{
    firstName : string;
    lastName : string;
}

// Methods 
interface IMethods{
    fullName(): string;
}

// Make a Combind Type which is call model
type model = Model<IUser, IMethods>

class User implements model{
    
    data : IUser;
    methods : IMethods;

    constructor( firstName: string, lastName: string){
        this.data = { firstName , lastName }
        this.methods = {
            fullName : () => `${firstName} ${lastName}`
        }
    }
}

const user1 = new User('Maruf', 'Mubin')
console.log(user1.methods.fullName());