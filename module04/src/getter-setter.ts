class BankAccountTwo{
    public readonly id : number;
    public name : string;
    private _balance : number;
    
    constructor( id: number, name: string, balance: number ){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    // Getter 
    get balance():number{
        return this._balance;
    }

    // Setter 
    set deposite( amount : number ){
        this._balance += amount;
    }
}

const myBalance = new BankAccountTwo( 222, "Maruf Mubin", 30 );
// myBalance.addDeposite( 50 );
// const balance = myBalance.getBalance()
myBalance.deposite = 20
myBalance.deposite = 500
myBalance.deposite = 30
// console.log( myBalance )
// console.log(`My Current Balance is ${myBalance.balance}`)

