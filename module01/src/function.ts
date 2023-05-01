// Normal Function 
function add( num1:number, num2:number ): number{
    return num1 + num2;
}

// Arrow Function 
const addArrow = ( num3:number, num4:number ) : number => num3 + num4;

// Callback Function 
const arr:number[] = [ 1, 4, 5, 7 ];

const newArray:number[] = arr.map(( elem:number ) => elem * elem );

// A method or Function 
const person: {
    name: string;
    balance : number;
    addBalance( money: number ) : void; // there are define which type our function return 
} = {
    name: "maruf",
    balance : 5,
    addBalance( money: number ){
        console.log(`My new Balance is ${this.balance + money }`);
    },
};

//Quiz Function 
function generateAdder(a: number): (b: number) => number {

    return function(b: number) {
  
      return a + b;
  
    };
  
  }
  
  const addTwo = generateAdder(2);
  
  console.log(addTwo(3));
  
  console.log(addTwo(5));  