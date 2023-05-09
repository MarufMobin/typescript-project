/* 
    There are using Only Method also we are does not know how to actual implement that method 
    we are using only method
    we are using only shape of method
    
    -----------------------------------------------------
    we have two way to define abstract function
    -> Interface 
    -> Abstract Class
*/

//interface 
interface IVehicle {
    name: string;
    model: string;
}
const vehicles : IVehicle = {
    name: 'Car',
    model : '2000',
};

// Abastract Class 
interface IVehicles{
    startEngine():void;
    stopEngine():void;
    move():void;
}

class Vehicle implements IVehicles{
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ){}
    startEngine(): void {
        console.log('I am Starting Engine');
    }
    stopEngine(): void {
        console.log('I am Stop Engine');
    }
    move(): void {
        console.log('I am Moving...');
    }
    test(){
        console.log("I am for testing purpose");
    }
}

const vehicle10 = new Vehicle("Car", "Toyota", 2000 );
/* 
    So, we are make abstract Interface to uper using interface keyword and make a abstraction class using interface 
*/

/*  Abstraction Class */
interface IShip{
    startEngine():void;
    stopEngine():void;
    move():void;
}
abstract class Ship implements IShip{
    constructor(
        public name: string,
        public shipAge: number,
        public destination: string
    ){}
    abstract startEngine(): void
    abstract stopEngine(): void
    move(): void {
        console.log('I am Moving...');
    }
    test(){
        console.log("I am for testing purpose");
    }
}

class Board extends Ship{
    startEngine(): void {
        console.log('I am Starting Engine');
    }
    stopEngine(): void {
        console.log('I am Stop Engine');
    }
}