// Public Modifier 
class BankAccount{
    public readonly id : number;
    public name : string;
    private _balance : number;

    constructor( id: number, name: string, balance: number ){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance(){
        console.log(`My Current Balance ${this._balance}`)
    }
    addDeposite( amount:number ){
        this._balance += amount
    }
    withdrawBalance( amount:number ){
        this._balance -= amount;
    }
}

const myAccount = new BankAccount( 444, 'Maruf Mubin', 30 );
// myAccount.balance = 0;
myAccount.getBalance()
myAccount.addDeposite( 50 )
myAccount.withdrawBalance( 10 )
// console.log(myAccount) 

/* 
    There are three access modifier 
    -> public 
    -> protected 
    -> private 
    -- public are use type properties 
    -- private are using when any value are hidden then we are using private modifier 
    -- protected are using when we are used any inherited classes 
*/